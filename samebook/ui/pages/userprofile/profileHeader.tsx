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
      <div className="max-w-7xl mx-auto  ">
        {isOpen && (
          <div>
            <EditProfile setIsOpen={setIsOpen} />
          </div>
        )}
        <div className="bg-background-primary ">
          <div className="h-96"></div>
          <div className="flex justify-end p-6">
            <button className="bg-[#F2F2F2] text-[#080809] p-2 rounded-md font-bold flex items-center">
              <span className="material-symbols-outlined material-icons mr-1">
                photo_camera
              </span>
              Add cover photo
            </button>
          </div>
        </div>
        <div className="relative px-8">
          <div className="absolute top-0  -translate-y-1/2">
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
            <p className="text-4xl font-bold flex-1 my-8">Chris Redfield</p>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#3B3D3E] py-1 px-3 rounded-md font-semibold text-xl flex items-center "
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
          <ul className="flex text-lg text-[#AFB2B7] ">
            {links.map((link) => (
              <li
                key={link.href}
                className={`hover:bg-[#3B3D3E] p-3 relative rounded-md cursor-pointer ${
                  currentPath === link.href ? "text-text-selected" : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
                {currentPath === link.href && (
                  <span className="border-b-4 border-text-selected absolute bottom-0 w-full left-0 rounded-t-lg"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
