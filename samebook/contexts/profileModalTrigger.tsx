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

export const ModalTriggerContext = createContext(defaultContextValue);

export default function ModalTriggerProvider({ children }: MTProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalTriggerContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <EditProfile />}
      {children}
    </ModalTriggerContext.Provider>
  );
}
