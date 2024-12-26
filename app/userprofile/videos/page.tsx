import Image from "next/image";
import profiledefaultimage from "../../../public/profiledefaultimage.png";

export default function Videos() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-4">
      <div className="bg-background-secondary rounded-lg  ">
        <div className="p-2 text-2xl">Videos</div>
        <div>
          <ul className="p-2 flex flex-wrap justify-center">
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
            <li className="flex w-[calc(20%-8px)]   items-center  p-2   rounded-lg">
              <Image
                className="rounded-md"
                height={1000}
                width={1000}
                alt="profile"
                src={profiledefaultimage}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
