"use client";
import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import { useContext, useEffect, useRef } from "react";
import { ProfileModalContext } from "@/samebook/contexts/profileModalTrigger";

export default function EditProfile() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { setIsOpen } = useContext(ProfileModalContext);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [setIsOpen]);

  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-black bg-opacity-40">
      <div className="flex h-full w-full justify-center overflow-y-scroll py-10">
        <div
          ref={modalRef}
          className="min-h-fit w-[700px] rounded-md border-[1px] border-divider_secondary bg-background-secondary">
          {/* Head */}
          <div className="border-b-[1px] border-divider_secondary">
            <div className="relative p-4 text-center text-2xl font-bold">
              <p>Edit profile</p>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-1/2 flex -translate-y-1/2 rounded-full p-2 transition-transform duration-100 ease-in-out hover:bg-button-primary active:scale-90">
                <span className="material-symbols-outlined material-icons">
                  close
                </span>
              </button>
            </div>
          </div>
          {/* Profile Photo */}
          <div className="border-divider_secondary">
            <div className="p-4">
              <div className="flex justify-between text-xl">
                <p className="font-semibold">Profile picture</p>
                <p className="cursor-pointer rounded-md p-1 text-link-primary hover:bg-button-primary active:bg-button-active">
                  Add
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <Image
                className="rounded-full"
                height={175}
                width={175}
                alt="profile"
                src={profiledefaultimage}
              />
            </div>
          </div>
          {/* Cover Photo */}
          <div className="border-divider_secondary">
            <div className="p-4">
              <div className="flex justify-between text-xl">
                <p className="font-semibold">Cover photo</p>
                <p className="cursor-pointer rounded-md p-1 text-link-primary hover:bg-button-primary active:bg-button-active">
                  Add
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <div className="h-44 w-4/5 rounded-lg bg-background-primary"></div>
            </div>
          </div>
          {/* Bio Photo */}
          <div className="border-divider_secondary">
            <div className="p-4">
              <div className="flex justify-between text-xl">
                <p className="font-semibold">Bio</p>
                <p className="cursor-pointer rounded-md p-1 text-link-primary hover:bg-button-primary active:bg-button-active">
                  Add
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4 text-text-primary">
              <p>Describe yourself...</p>
            </div>
          </div>
          {/* Bio Photo */}
          <div className="border-divider_secondary">
            <div className="px-4 py-2">
              <div className="flex justify-between text-xl">
                <p className="font-semibol d">Customize your intro</p>
                <p className="cursor-pointer rounded-md p-1 text-link-primary hover:bg-button-primary active:bg-button-active">
                  Add
                </p>
              </div>
            </div>
            <div className="p-4 text-text-primary">
              <div>
                <div className="flex py-1">
                  <span className="material-symbols-outlined material-icons mr-2">
                    home
                  </span>
                  <p>Current city</p>
                </div>
                <div className="flex py-1">
                  <span className="material-symbols-outlined material-icons mr-2">
                    business_center
                  </span>
                  <p>Workplace</p>
                </div>
                <div className="flex py-1">
                  <span className="material-symbols-outlined material-icons mr-2">
                    school
                  </span>
                  <p>School</p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4">
            <button className="w-full rounded-lg bg-background-selected p-2 text-lg font-bold text-link-primary transition-transform duration-100 hover:bg-background-selected_hover active:scale-x-95">
              Edit your About info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
