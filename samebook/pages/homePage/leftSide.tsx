import Image from "next/image";
import Link from "next/link";
import profiledefaultimage from '@/public/profiledefaultimage.png';

export default function LeftSide() {
  return (
    <div className="w-[350px] px-4">
      <div className="flex cursor-pointer items-center rounded-lg p-2 hover:bg-button-primary">
        <Image
          className="mr-3 rounded-full"
          height={40}
          width={40}
          alt="profile"
          src={profiledefaultimage}
        />
        <div>
          <Link href="/userprofile"> Chris Redfield</Link>
        </div>
      </div>
    </div>
  );
}
