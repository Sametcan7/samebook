import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";

export default function Home() {
  return (
    <div className="mx-auto 3xl:max-w-[1440px] h-full pt-4">
      <div className="flex ">
        {/* Left */}
        <div className="w-[350px] px-4">
          <div className="flex items-center hover:bg-button-primary rounded-lg p-2 cursor-pointer">
            <Image
              className="rounded-full mr-3"
              height={40}
              width={40}
              alt="profile"
              src={profiledefaultimage}
            />
            <p>Chris Redfield</p>
          </div>
        </div>
        {/* Middle */}
        <div className="flex-1"></div>
        {/* Right */}
        <div className="w-[350px] px-4">
          <div className="">
            <p className="text-text-primary text-bold text-lg">Chats</p>
          </div>
        </div>
      </div>
    </div>
  );
}
