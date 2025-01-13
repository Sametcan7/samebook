"use client";
import { createContext, useState } from "react";
import PostModalMain from "../components/post/postModal";

type PostModalContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DefContextValue: PostModalContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const PostModalContext =
  createContext<PostModalContextType>(DefContextValue);

export default function PostModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PostModalContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <PostModalMain />}
      {children}
    </PostModalContext.Provider>
  );
}
