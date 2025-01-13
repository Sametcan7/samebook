import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import ModalToggle from "../../utils/ModalToggle";

export default function Post() {
  return (
    <div className="mb-4 rounded-lg bg-background-secondary p-2 px-4">
      <PostHeader />
      <PostText />
      <ModalToggle type="post">
        <PostImage />
      </ModalToggle>
      <LikeAndComment triggers={true} />
    </div>
  );
}

export function PostHeader() {
  return (
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
  );
}

export function PostText() {
  return (
    <div className="pt-2">
      <p>
        The front axle of a vehicle is a crucial assembly that supports the
        weight of the front end and facilitates steering, suspension, and
        transmission of torque to the wheels s an overview of its key
        components:
      </p>
    </div>
  );
}

export function PostImage() {
  return (
    <div className="relative my-2 h-[30vw] bg-black">
      <Image
        className="mx-auto object-contain"
        fill={true}
        src={profiledefaultimage}
        alt=""
      />
    </div>
  );
}

export function LikeAndComment({ triggers }: { triggers?: boolean }) {
  return (
    <div>
      <div className="flex justify-between text-text-primary">
        <div className="group flex cursor-pointer items-center">
          <span className="material-icons mr-2 text-lg text-blue-700">
            thumb_up
          </span>
          <span className="group-hover:underline">123</span>
        </div>
        {triggers ? (
          <ModalToggle type="post">
            <div className="flex">
              <span className="mr-2 cursor-pointer hover:underline">
                24 comments
              </span>
            </div>
          </ModalToggle>
        ) : (
          <div className="flex">
            <span className="mr-2 cursor-pointer hover:underline">
              24 comments
            </span>
          </div>
        )}
      </div>
      {/* Border */}
      <div className="mt-1 border-b-[1px] border-divider"></div>
      {/* Interactivity */}
      <div className="mt-2 flex">
        <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
          <span className="material-icons mr-2">thumb_up</span>
          <p>Like</p>
        </div>
        {triggers ? (
          <ModalToggle
            type="post"
            className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
            <span className="material-icons mr-2">comment</span>
            <p>Comment</p>
          </ModalToggle>
        ) : (
          <div className="flex basis-full cursor-pointer justify-center rounded-lg py-2 hover:bg-button-primary">
            <span className="material-icons mr-2">comment</span>
            <p>Comment</p>
          </div>
        )}
      </div>
    </div>
  );
}
