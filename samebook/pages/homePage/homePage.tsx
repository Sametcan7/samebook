import Main from "./main";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import PostModalContextProvider from "@/samebook/contexts/postModalTrigger";

export default function HomePage() {
  return (
    <div className="mx-auto h-full pt-4 3xl:max-w-[1440px]">
      <div className="flex">
        {/* Left */}
        <LeftSide />
        {/* Main */}
        <div className="flex-1">
          <PostModalContextProvider>
            <Main />
          </PostModalContextProvider>
        </div>
        {/* Right */}
        <RightSide />
      </div>
    </div>
  );
}
