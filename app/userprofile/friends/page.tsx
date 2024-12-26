import Image from "next/image";
import profiledefaultimage from "../../../public/profiledefaultimage.png";

export default function Friends() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-4">
      <div className="bg-background-secondary rounded-lg  ">
        <div className="p-2 text-2xl">Friends</div>
        <div>
          <ul className="p-2 flex flex-wrap justify-center">
            <li className="flex w-[calc(50%-8px)] m-1  items-center gap-2 p-2  border-2 border-[#3d3c3c] rounded-lg">
              <Image
                className="rounded-md"
                height={75}
                width={75}
                alt="profile"
                src={profiledefaultimage}
              />

              <div className="flex-1">Samet Can AKÇAALAN</div>
              <button className="text-text-selected hover:bg-background-selected_hover bg-background-selected rounded-lg p-2">
                Add friends
              </button>
            </li>
            <li className="flex w-[calc(50%-8px)] m-1 items-center gap-2 p-2 border-2 border-[#3d3c3c] rounded-lg">
              <Image
                className="rounded-md"
                height={75}
                width={75}
                alt="profile"
                src={profiledefaultimage}
              />

              <div className="flex-1">Samet Can AKÇAALAN</div>
              <button className="text-text-selected hover:bg-background-selected_hover bg-background-selected rounded-lg p-2">
                Add friends
              </button>
            </li>
            <li className="flex w-[calc(50%-8px)] m-1 items-center gap-2 p-2 border-2 border-[#3d3c3c] rounded-lg">
              <Image
                className="rounded-md"
                height={75}
                width={75}
                alt="profile"
                src={profiledefaultimage}
              />

              <div className="flex-1">Samet Can AKÇAALAN</div>
              <button className="text-text-selected hover:bg-background-selected_hover bg-background-selected rounded-lg p-2">
                Add friends
              </button>
            </li>
            <li className="flex w-[calc(50%-8px)] m-1 items-center gap-2 p-2 border-2 border-[#3d3c3c] rounded-lg">
              <Image
                className="rounded-md"
                height={75}
                width={75}
                alt="profile"
                src={profiledefaultimage}
              />

              <div className="flex-1">Samet Can AKÇAALAN</div>
              <button className="text-text-selected hover:bg-background-selected_hover bg-background-selected rounded-lg p-2">
                Add friends
              </button>
            </li>
            <li className="flex w-[calc(50%-8px)] m-1 items-center gap-2 p-2 border-2 border-[#3d3c3c] rounded-lg">
              <Image
                className="rounded-md"
                height={75}
                width={75}
                alt="profile"
                src={profiledefaultimage}
              />

              <div className="flex-1">Samet Can AKÇAALAN</div>
              <button className="text-text-selected hover:bg-background-selected_hover bg-background-selected rounded-lg p-2">
                Add friends
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
