import Image from "next/image";
import profiledefaultimage from "../../public/profiledefaultimage.png";

export default function UserProfile() {
  return (
    <div className="bg-[#1C1C1D]">
      <ProfileMain />
    </div>
  );
}

function ProfileMain() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex gap-4 pt-4">
        {/* Left side */}
        <div className="w-[40%]">
          {/* Intro  */}
          <div className="bg-background-secondary p-4 rounded-lg mb-4">
            <p className="mb-4 text-xl font-semibold">Intro</p>
            <div className="bg-button-primary rounded-md p-1 py-2 transition-transform duration-100 hover:bg-button-hover mb-4 active:scale-x-90">
              <button className="w-full h-full">Add bio</button>
            </div>
            <div className="bg-button-primary rounded-md p-1 py-2  hover:bg-bg-button-hover transition-transform duration-100 active:scale-x-90">
              <button className="w-full h-full">Edit details</button>
            </div>
          </div>
          {/* Photos  */}
          <div className="bg-background-secondary p-4 rounded-lg flex justify-between items-center mb-4">
            <p className="text-xl cursor-pointer hover:underline font-semibold">
              Photos
            </p>
            <p className="text-link-primary hover:bg-button-primary rounded-md p-2 cursor-pointer">
              See all photos
            </p>
          </div>
          {/* Friends  */}
          <div className="bg-background-secondary p-4 rounded-lg flex justify-between items-center ">
            <p className="text-xl cursor-pointer hover:underline font-semibold">
              Friends
            </p>
            <p className="text-link-primary hover:bg-button-primary rounded-md p-2 cursor-pointer">
              See all photos
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="w-[60%]">
          {/* SendPost side */}
          <div className="bg-background-secondary rounded-lg p-4 mb-4">
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
              <div className="bg-input-background hover:bg-input-hover active:bg-input-active w-full rounded-3xl p-2 cursor-pointer">
                <p className="text-text-primary text-xl px-2 ">
                  What&apos;s on your mind?
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background-secondary rounded-lg  text-2xl font-bold pb-4">
            <div>
              <p className="px-4 py-3">Posts</p>
              <div className="border-b-2 border-divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
