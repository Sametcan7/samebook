"use client";
import { useContext } from "react";
import { PostModalContext } from "../contexts/postModalTrigger";
import { ProfileModalContext } from "../contexts/profileModalTrigger";

type ToggleTypes = {
  children: React.ReactNode;
  type: string;
  className?: string;
};

export default function ModalToggle({
  children,
  type,
  className,
}: ToggleTypes) {
  const { setIsOpen: postToggle } = useContext(PostModalContext);
  const { setIsOpen: profileToggle } = useContext(ProfileModalContext);

  return (
    <>
      {type === "post" && (
        <div
          className={`${className} cursor-pointer`}
          onClick={() => postToggle((prev) => !prev)}>
          {children}
        </div>
      )}
      {type === "profile" && (
        <div
          className={`${className} cursor-pointer`}
          onClick={() => profileToggle((prev) => !prev)}>
          {children}
        </div>
      )}
    </>
  );
}
