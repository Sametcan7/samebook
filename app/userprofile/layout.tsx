import ProfileHeader from "@/samebook/pages/userProfile/profileHeader";

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileHeader />
      <div className="bg-[#1C1C1D]">{children}</div>
    </>
  );
}
