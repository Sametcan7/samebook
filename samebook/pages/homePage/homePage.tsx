import Main from "./main";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import PostModalContextProvider from "@/samebook/contexts/postModalTrigger";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto h-full pt-[var(--header-height)] 3xl:max-w-[1440px]">
      <Link className="bg-white" href="/signup">
        sign
      </Link>

      <div className="flex pt-4">
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
