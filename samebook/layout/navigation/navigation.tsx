import Image from "next/image";
import Link from "next/link";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import Logo from "@/samebook/ui/logo";

export default function Navigation() {
  return (
    <div className="fixed z-10 h-14 w-full justify-between border-b-[1px] border-divider_secondary bg-background-secondary">
      <LogoAndSearchInput />
      <CenterButtons />
      <Menu />
    </div>
  );
}

function LogoAndSearchInput() {
  return (
    <div className="fixed left-0 flex h-14 w-[400px] items-center pl-4">
      {/* Logo */}
      <Link href="/" className="mr-2">
        <Logo />
      </Link>
      {/* Search Input */}
      <div className="mx-2 w-full">
        <label className="flex w-full items-center rounded-full bg-input-background px-2 py-2">
          <span className="material-symbols-outlined material-icons pr-1 text-text-primary">
            search
          </span>
          <input
            className="w-full bg-input-background outline-none"
            placeholder="Search Samebook"
          />
        </label>
      </div>
    </div>
  );
}

function CenterButtons() {
  return (
    <div className="mx-auto flex h-14 w-full items-center justify-center">
      {/* Home Page Link */}
      <Link
        href="/"
        className="rounded-lg px-10 py-1 hover:bg-input-background">
        <span className="material-icons material-symbols-outlined text-3xl">
          home
        </span>
      </Link>
      {/* Friends Link */}
      <Link
        href="/"
        className="rounded-lg px-10 py-1 hover:bg-input-background">
        <span className="material-icons material-symbols-outlined text-3xl">
          group
        </span>
      </Link>
    </div>
  );
}

function Menu() {
  return (
    <div className="fixed right-0 top-0 flex h-14 cursor-pointer items-center pr-4">
      <Image
        className="rounded-full"
        height={40}
        width={40}
        alt="profile"
        src={profiledefaultimage}
      />
    </div>
  );
}
