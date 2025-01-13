import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import { LikeAndComment, PostHeader, PostImage, PostText } from "./post";
import PostModalContainer from "./postModalContainer";
import ModalToggle from "@/samebook/utils/ModalToggle";

export default function PostModalMain() {
  return (
    <PostModalContainer>
      <div className="scrollbar overflow-y-scroll px-2">
        <PostTitle />
        <PostHeader />
        <PostText />
        <div className="mx-[-0.5rem]">
          <PostImage />
        </div>
        <LikeAndComment />
        <Comments />
      </div>
      <AddComment />
    </PostModalContainer>
  );
}

function PostTitle() {
  return (
    <div className="border-b-[1px] border-divider">
      <div className="relative p-4 text-center text-2xl font-bold">
        <p>Chris&apos;s Post</p>
        <ModalToggle type="post">
          <button className="absolute right-2 top-1/2 flex -translate-y-1/2 rounded-full p-2 transition-transform duration-100 ease-in-out hover:bg-button-primary active:scale-90">
            <span className="material-symbols-outlined material-icons">
              close
            </span>
          </button>
        </ModalToggle>
      </div>
    </div>
  );
}
function Comments() {
  return (
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
  );
}

function AddComment() {
  return (
    <div className="shrink-0">
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
              <span className="material-icons text-text-primary">send</span>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}
