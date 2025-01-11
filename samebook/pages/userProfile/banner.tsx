import { CameraIcon } from "@/samebook/ui/icons/icons";


export default function Banner() {
  return (
    <div className="h-96 bg-background-primary">
      <div className="flex justify-end p-6">
        <button className="flex items-center rounded-md bg-[#F2F2F2] p-2 font-bold text-[#080809]">
          <CameraIcon /> <span>Add cover photo</span>
        </button>
      </div>
    </div>
  );
}
