import ProfileHeader from "@/samebook/pages/userProfile/profileHeader";

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[var(--header-height)]">
      <ProfileHeader />
      <div className="bg-[#1C1C1D]">{children}</div>
    </div>
  );
}
