import Center from "./center";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

export default function HomePage() {
  return (
    <div className="mx-auto h-full pt-4 3xl:max-w-[1440px]">
      <div className="flex">
        {/* Left */}
        <LeftSide />
        {/* Center */}
        <div className="flex-1">
          {/* SendPost side */}
          <Center />
        </div>
        {/* Right */}
        <RightSide />
      </div>
    </div>
  );
}
