"use client";

import { PostModalContext } from "@/samebook/contexts/postModalTrigger";
import { useContext, useEffect, useRef } from "react";

type ContainerType = {
  children: React.ReactNode;
};

export default function PostModalContainer({ children }: ContainerType) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { isOpen, setIsOpen } = useContext(PostModalContext);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen((prev) => !prev);
      }
    };
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, setIsOpen]);
  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-black bg-opacity-70">
      <div className="flex h-full w-full justify-center py-8">
        <div
          ref={modalRef}
          className="flex h-full w-[700px] flex-col rounded-md border-[1px] border-divider_secondary bg-background-secondary">
          {children}
        </div>
      </div>
    </div>
  );
}
