import SendPost from "../../ui/sendPost";
import Post from "@/samebook/components/post/post";

export default function Main() {
  return (
    <div className="mx-auto max-w-[700px]">
      <SendPost />
      <Post />
    </div>
  );
}
