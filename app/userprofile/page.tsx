import Image from "next/image";
import profiledefaultimage from "../../public/profiledefaultimage.png";
import Link from "next/link";
import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export default function UserProfile() {
  return (
    <div className="bg-[#1C1C1D]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex gap-4 pt-4">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="w-[40%]">
      {/* Intro  */}
      <CompoundDiv>
        <CompoundP>Intro</CompoundP>
        <CompoundButton>Add bio</CompoundButton>
        <CompoundButton>Add bio</CompoundButton>
      </CompoundDiv>
      {/* Photos  */}
      <CompoundDiv className="mb-4 flex items-center justify-between">
        <CompoundP className="cursor-pointer hover:underline">Photos</CompoundP>
        <CompoundLink>See all photos</CompoundLink>
      </CompoundDiv>
      {/* Friends  */}
      <CompoundDiv className="mb-4 flex items-center justify-between">
        <CompoundP className="cursor-pointer hover:underline">
          Friends
        </CompoundP>
        <CompoundLink>See all photos</CompoundLink>
      </CompoundDiv>
    </div>
  );
}

function Main() {
  return (
    <div className="w-[60%]">
      {/* SendPost Title */}
      <div className="mb-4 rounded-lg bg-background-secondary p-4">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              className="rounded-full"
              height={45}
              width={45}
              alt="profile"
              src={profiledefaultimage}
            />
          </div>
          <div className="w-full cursor-pointer rounded-3xl bg-input-background p-2 hover:bg-input-hover active:bg-input-active">
            <p className="px-2 text-xl text-text-primary">
              What&apos;s on your mind?
            </p>
          </div>
        </div>
      </div>
      {/* User Posts Title */}
      <div className="rounded-lg bg-background-secondary pb-4 text-2xl font-bold">
        <div>
          <p className="px-4 py-3">Posts</p>
          <div className="border-b-2 border-divider"></div>
        </div>
      </div>
    </div>
  );
}

type CompoundType = {
  children: ReactNode;
  className?: string;
};

type CompoundButton = {
  children: ReactNode;
};

function CompoundDiv({ children, className }: CompoundType) {
  return (
    <div
      className={twJoin(
        "mb-4 rounded-lg bg-background-secondary p-4",
        className,
      )}>
      {children}
    </div>
  );
}

function CompoundP({ children, className }: CompoundType) {
  return (
    <p className={twJoin("mb-4 text-xl font-semibold", className)}>
      {children}
    </p>
  );
}

function CompoundLink({ children }: CompoundType) {
  return (
    <Link
      href=""
      className="cursor-pointer rounded-md p-2 text-link-primary hover:bg-button-primary">
      {children}
    </Link>
  );
}

function CompoundButton({ children }: CompoundButton) {
  return (
    <button className="mb-4 h-full w-full rounded-md bg-button-primary p-1 py-2 transition-transform duration-100 hover:bg-button-hover active:scale-x-90">
      {children}
    </button>
  );
}
