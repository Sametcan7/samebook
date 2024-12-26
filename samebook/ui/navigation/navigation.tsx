import Image from "next/image";
import Link from "next/link";
import profiledefaultimage from "@/public/profiledefaultimage.png";

export default function Navigation() {
  return (
    <div className="bg-background-secondary justify-between  fixed border-b-[1px] w-full border-divider_secondary  h-14   z-10">
      {/* Left */}
      <div className="flex w-[400px] pl-4 h-14 items-center fixed left-0 ">
        <Link href="/" className="flex items-center mr-2">
          <span className="text-4xl font-bold text-blue-600 relative group">
            same
            <span className="absolute inset-x-0 top-0 border-t-2 border-b-2 border-transparent group-hover:border-white transition-all duration-300"></span>
          </span>
          <span className="text-4xl font-bold text-white relative group">
            book
            <span className="absolute inset-x-0 bottom-0 border-t-2 border-b-2 border-transparent group-hover:border-blue-600 transition-all duration-300"></span>
          </span>
        </Link>
        <div className="mx-2 w-full">
          <label className="flex items-center w-full bg-input-background px-2 py-2 rounded-full">
            <span className="material-symbols-outlined text-text-primary material-icons pr-1 ">
              search
            </span>
            <input
              className="bg-input-background  outline-none w-full"
              placeholder="Search Samebook"
            />
          </label>
        </div>
      </div>
      {/* Middle */}
      <div className=" mx-auto h-14 justify-center w-full items-center flex">
        <Link
          href="/"
          className="hover:bg-input-background px-10 py-1 rounded-lg"
        >
          <span className="material-icons  material-symbols-outlined text-3xl ">
            home
          </span>
        </Link>
        <Link
          href="/"
          className="hover:bg-input-background px-10 py-1 rounded-lg"
        >
          <span className="material-icons  material-symbols-outlined text-3xl ">
            group
          </span>
        </Link>
      </div>
      {/* Right */}
      <div className="cursor-pointer pr-4 h-14 flex items-center fixed right-0 top-0">
        <Image
          className="rounded-full "
          height={40}
          width={40}
          alt="profile"
          src={profiledefaultimage}
        />
      </div>
    </div>
  );
}
