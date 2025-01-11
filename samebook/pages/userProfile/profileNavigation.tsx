"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/userprofile", label: "Posts" },
  { href: "/userprofile/about", label: "About" },
  { href: "/userprofile/friends", label: "Friends" },
  { href: "/userprofile/photos", label: "Photos" },
];

export default function ProfileNavigation() {
  const currentPath = usePathname();

  return (
    <ul className="flex px-8 pt-1 text-lg text-[#AFB2B7]">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`relative cursor-pointer rounded-md p-3 hover:bg-[#3B3D3E] ${
            currentPath === link.href ? "text-text-selected" : ""
          }`}>
          {link.label}

          {currentPath === link.href && (
            <span className="absolute bottom-0 left-0 w-full rounded-t-lg border-b-4 border-text-selected"></span>
          )}
        </Link>
      ))}
    </ul>
  );
}
