import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import { useEffect, useRef } from "react";

interface EditProfileProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditProfile({ setIsOpen }: EditProfileProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      console.log(e.target);
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
    <div className="fixed h-screen w-screen bg-black bg-opacity-40  inset-0 z-10">
      <div className="flex justify-center overflow-y-scroll py-10  h-full w-full">
        <div
          ref={modalRef}
          className="bg-background-secondary rounded-md  min-h-fit border-divider_secondary border-[1px] w-[700px]"
        >
          {/* Head */}
          <div className="border-b-[1px] border-divider_secondary">
            <div className="text-2xl relative font-bold p-4 text-center">
              <p>Edit profile</p>
              <button
                onClick={() => setIsOpen(false)}
                className="transition-transform duration-100 ease-in-out absolute flex right-2  hover:bg-button-primary active:scale-90  rounded-full p-2 top-1/2 -translate-y-1/2"
              >
                <span className="material-symbols-outlined material-icons">
                  close
                </span>
              </button>
            </div>
          </div>
          {/* Profile Photo */}
          <div className=" border-divider_secondary">
            <div className="p-4">
              <div className="flex text-xl  justify-between">
                <p className="font-semibold">Profile picture</p>
                <p className="text-link-primary   active:bg-button-active p-1 rounded-md cursor-pointer hover:bg-button-primary">
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
          <div className=" border-divider_secondary">
            <div className="p-4">
              <div className="flex text-xl  justify-between">
                <p className="font-semibold">Cover photo</p>
                <p className="text-link-primary   active:bg-button-active p-1 rounded-md cursor-pointer hover:bg-button-primary">
                  Add
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <div className="w-4/5 bg-background-primary h-44 rounded-lg"></div>
            </div>
          </div>
          {/* Bio Photo */}
          <div className=" border-divider_secondary">
            <div className="p-4">
              <div className="flex text-xl  justify-between">
                <p className="font-semibold">Bio</p>
                <p className="text-link-primary  active:bg-button-active p-1 rounded-md cursor-pointer hover:bg-button-primary">
                  Add
                </p>
              </div>
            </div>
            <div className="flex justify-center py-4 text-text-primary">
              <p>Describe yourself...</p>
            </div>
          </div>
          {/* Bio Photo */}
          <div className=" border-divider_secondary">
            <div className="px-4 py-2">
              <div className="flex text-xl  justify-between">
                <p className="font-semibol d">Customize your intro</p>
                <p className="text-link-primary  active:bg-button-active p-1 rounded-md cursor-pointer hover:bg-button-primary">
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
            <button className="w-full p-2 transition-transform duration-100 active:scale-x-95  rounded-lg hover:bg-background-selected_hover bg-background-selected font-bold text-link-primary text-lg">
              Edit your About info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
