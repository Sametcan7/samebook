import Image from "next/image";
import profiledefaultimage from "@/public/profiledefaultimage.png";
import feel from "@/public/feel.png";
import photo from "@/public/photo.png";
import video from "@/public/video.png";

export default function SendPost() {
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
