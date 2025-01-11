import ModalTriggerProvider from "@/samebook/contexts/profileModalTrigger";
import UserPhoto from "./userPhoto";
import Banner from "./banner";
import ProfileNavigation from "./profileNavigation";

export default function ProfileHeader() {
  return (
    <ModalTriggerProvider>
      <div className="bg-[#252728]">
        <div className="mx-auto max-w-7xl">
          <Banner />
          <UserPhoto />
          <ProfileNavigation />
        </div>
      </div>
    </ModalTriggerProvider>
  );
}
