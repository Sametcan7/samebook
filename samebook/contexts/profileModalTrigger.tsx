"use client";

import { createContext, useState } from "react";
import EditProfile from "../pages/userProfile/editProfileModal";

type MTProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultContextValue: ContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const ProfileModalContext = createContext(defaultContextValue);

export default function ProfileModalTrigger({ children }: MTProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProfileModalContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <EditProfile />}
      {children}
    </ProfileModalContext.Provider>
  );
}
