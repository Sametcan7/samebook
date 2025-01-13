import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import { EditIcon } from "@/samebook/ui/icons/icons";
import ModalToggle from "@/samebook/utils/ModalToggle";

export default function UserPhoto() {
  if (typeof window == "undefined") {
    console.log("Application is on server side");
  } else {
    alert("Application is on client side");
  }
  return (
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
          <ModalToggle type="profile">
            <button className="flex items-center rounded-md bg-[#3B3D3E] px-3 py-1 text-xl font-semibold">
              <EditIcon /> <span>Edit profile</span>
            </button>
          </ModalToggle>
        </div>
      </div>
      <div className="border-t-[0.5px] border-[#404C5D]"></div>
    </div>
  );
}
