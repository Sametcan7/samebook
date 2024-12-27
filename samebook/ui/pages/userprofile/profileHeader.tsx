"use client";
import Image from "next/image";
import profiledefaultimage from "../../../../public/profiledefaultimage.png";
import EditProfile from "./editProfile";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentPath = usePathname();

  console.log(currentPath);

  const links = [
    { href: "/userprofile", label: "Posts" },
    { href: "/userprofile/about", label: "About" },
    { href: "/userprofile/friends", label: "Friends" },
    { href: "/userprofile/photos", label: "Photos" },
    { href: "/userprofile/videos", label: "Videos" },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        {isOpen && (
          <div>
            <EditProfile setIsOpen={setIsOpen} />
          </div>
        )}
        <div className="bg-background-primary">
          <div className="h-96"></div>
          <div className="flex justify-end p-6">
            <button className="flex items-center rounded-md bg-[#F2F2F2] p-2 font-bold text-[#080809]">
              <span className="material-symbols-outlined material-icons mr-1">
                photo_camera
              </span>
              Add cover photo
            </button>
          </div>
        </div>
        <div className="relative px-8">
          <div className="absolute top-0 -translate-y-1/2">
            <Image
              className="rounded-full"
              height={175}
              width={175}
              alt="profile"
              src={profiledefaultimage}
            />
          </div>
          <div className="flex items-center">
            <div className="w-[175px]"></div>
            <p className="my-8 flex-1 text-4xl font-bold">Chris Redfield</p>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center rounded-md bg-[#3B3D3E] px-3 py-1 text-xl font-semibold"
              >
                <span className="material-symbols-outlined material-icons mr-1">
                  edit
                </span>
                Edit profile
              </button>
            </div>
          </div>
          <div className="border-t-[0.5px] border-[#404C5D]"></div>
        </div>
        <div className="px-8">
          <ul className="flex pt-1 text-lg text-[#AFB2B7]">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`relative cursor-pointer rounded-md p-3 hover:bg-[#3B3D3E] ${
                  currentPath === link.href ? "text-text-selected" : ""
                }`}
              >
                {link.label}

                {currentPath === link.href && (
                  <span className="absolute bottom-0 left-0 w-full rounded-t-lg border-b-4 border-text-selected"></span>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
