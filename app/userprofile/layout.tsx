import ProfileHeader from "@/samebook/ui/pages/userprofile/profileHeader";

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-[#252728]">
        <ProfileHeader />
      </div>
      <div className="bg-[#1C1C1D]">{children}</div>
    </div>
  );
}
