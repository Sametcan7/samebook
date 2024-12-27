"use client";
import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import video from "@/public/video.png";
import photo from "@/public/photo.png";
import feel from "@/public/feel.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto h-full pt-4 3xl:max-w-[1440px]">
      <div className="flex">
        {/* Left */}
        <LeftSide />
        {/* Middle */}
        <div className="flex-1">
          {/* SendPost side */}
          <Middle />
        </div>
        {/* Right */}
        <RightSide />
      </div>
    </div>
  );
}

function LeftSide() {
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

function RightSide() {
  return (
    <div className="w-[350px] px-4">
      <div>
        <p className="text-bold text-lg text-text-primary">Chats</p>
      </div>
    </div>
  );
}

function Middle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto max-w-[700px]">
      {isOpen && <ShowPost isOpen={isOpen} setIsOpen={setIsOpen} />}

      <SendPost />
      {/* Posts */}
      <div>
        <div
          onClick={() => setIsOpen(true)}
          className="mb-4 rounded-lg bg-background-secondary p-2 px-4"
        >
          {/* Post Header */}
          <div className="flex pt-2">
            <Image
              className="mr-2 rounded-full"
              width={50}
              height={50}
              src={profiledefaultimage}
              alt=""
            />
            <div className="flex flex-col">
              <p>Chris Redfield</p>
              <p className="text-text-primary">December 23 at 1:00 AM</p>
            </div>
          </div>
          {/* Post Text */}
          <div className="pt-2">
            <p>
              The front axle of a vehicle is a crucial assembly that supports
              the weight of the front end and facilitates steering, suspension,
              and transmission of torque to the wheels s an overview of its key
              components:
            </p>
          </div>
          {/* Post Main */}
          <div>
            <div className="relative my-2 h-[30vw] bg-black">
              <Image
                className="mx-auto object-contain"
                fill={true}
                src={profiledefaultimage}
                alt=""
              />
            </div>
          </div>
          {/* Like And Comment */}
          <div className="flex justify-between text-text-primary">
            <div className="group flex cursor-pointer items-center">
              <span className="material-icons mr-2 text-lg text-blue-700">
                thumb_up
              </span>
              <span className="group-hover:underline">123</span>
            </div>
            <div className="flex">
              <span className="mr-2 cursor-pointer hover:underline">
                24 comments
              </span>
            </div>
          </div>
          {/* Border */}
          <div className="mt-1 border-b-[1px] border-divider"></div>
          {/* Interactivity */}
          <div className="mt-2 flex">
            <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
              <span className="material-icons mr-2">thumb_up</span>
              <p>Like</p>
            </div>
            <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
              <span className="material-icons mr-2">comment</span>
              <p>Comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendPost() {
  return (
    <div className="mb-4 rounded-lg bg-background-secondary p-4">
      <div className="flex items-center pb-3">
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
      <div className="border-b-[1px] border-divider_secondary"></div>
      <div className="flex justify-around pt-2">
        <div className="flex basis-full cursor-pointer items-center justify-center rounded-lg py-2 hover:bg-button-primary">
          <Image className="mr-2" width={25} height={25} src={video} alt="" />
          <p>Live video</p>
        </div>
        <div className="flex basis-full cursor-pointer items-center justify-center rounded-lg py-2 hover:bg-button-primary">
          <Image className="mr-2" width={25} height={25} src={photo} alt="" />
          <p>Photo/video</p>
        </div>
        <div className="flex basis-full cursor-pointer items-center justify-center rounded-lg py-2 hover:bg-button-primary">
          <Image className="mr-2" width={25} height={25} src={feel} alt="" />
          <p>Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

interface EditProfileProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowPost({ isOpen, setIsOpen }: EditProfileProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, setIsOpen]);
  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-black bg-opacity-70">
      <div className="flex h-full w-full justify-center py-8">
        <div
          ref={modalRef}
          className="flex h-full w-[700px] flex-col rounded-md border-[1px] border-divider_secondary bg-background-secondary"
        >
          {/* Modal Header */}
          <div className="border-b-[1px] border-divider">
            <div className="relative p-4 text-center text-2xl font-bold">
              <p>Chris&apos;s Post</p>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-1/2 flex -translate-y-1/2 rounded-full p-2 transition-transform duration-100 ease-in-out hover:bg-button-primary active:scale-90"
              >
                <span className="material-symbols-outlined material-icons">
                  close
                </span>
              </button>
            </div>
          </div>

          <div className="scrollbar overflow-y-scroll">
            {/* Post Header */}
            <div className="flex px-2 pt-2">
              <Image
                className="mr-2 rounded-full"
                width={50}
                height={50}
                src={profiledefaultimage}
                alt=""
              />
              <div className="flex flex-col">
                <p>Chris Redfield</p>
                <p className="text-text-primary">December 23 at 1:00 AM</p>
              </div>
            </div>
            {/* Post Text */}
            <div className="px-2 pt-2">
              <p>
                The front axle of a vehicle is a crucial assembly that supports
                the weight of the front end and facilitates steering,
                suspension, and transmission of torque to the wheels s an
                overview of its key components:
              </p>
            </div>
            <div>
              <div className="relative my-2 h-[30vw] rounded-b-xl bg-black">
                <Image
                  className="mx-auto object-contain"
                  fill={true}
                  src={profiledefaultimage}
                  alt=""
                />
              </div>
            </div>
            {/* Like And Comment */}
            <div className="flex justify-between px-2 text-text-primary">
              <div className="group flex cursor-pointer items-center">
                <span className="material-icons mr-2 text-lg text-blue-700">
                  thumb_up
                </span>
                <span className="group-hover:underline">123</span>
              </div>
              <div className="flex">
                <span className="mr-2 cursor-pointer hover:underline">
                  24 comments
                </span>
              </div>
            </div>
            {/* Border */}
            <div className="mx-2 mt-1 border-b-[1px] border-divider"></div>
            {/* Interactivity */}
            <div className="mt-2 flex px-2">
              <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
                <span className="material-icons mr-2">thumb_up</span>
                <p>Like</p>
              </div>
              <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
                <span className="material-icons mr-2">comment</span>
                <p>Comment</p>
              </div>
            </div>
            <div className="mx-4 my-1 border-b-[1px] border-divider"></div>

            {/* Comments */}
            <div>
              <div className="my-2 flex items-start px-2">
                <div className="mr-2 flex flex-none items-center">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    src={profiledefaultimage}
                    alt=""
                  />
                </div>
                <div className="min-w-0 rounded-lg bg-input-background p-2">
                  <div className="font-semibold">Chris Redfield</div>
                  <div className="break-words">
                    Shouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashouldashoadfsssssssssssssssssssssssssssssssssssssssuldashouldasdae
                    at
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Comment */}
          <div className="shrink-0">
            <div>
              <div className="my-2 flex px-2">
                <div className="mr-2 flex flex-none items-center">
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    src={profiledefaultimage}
                    alt=""
                  />
                </div>
                <div className="flex-1 rounded-lg bg-input-background p-2">
                  <label className="relative">
                    <input
                      className="w-full bg-input-background outline-none"
                      placeholder="Write an answer..."
                    />
                    <button className="absolute right-0">
                      <span className="material-icons text-text-primary">
                        send
                      </span>
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
