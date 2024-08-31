import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const AsideBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
    document.getElementsByTagName("body")[0].classList.toggle("menu-closed");
  };
  return (
    <button
      className="flex items-center justify-center w-full h-14 bg-neutral-400 hover:bg-primary-100 md:h-[72px]"
      onClick={toggleSidebar}
    >
      <span className="sr-only">{isMenuOpen ? "close menu" : "open menu"}</span>
      {isMenuOpen ? (
        <IoMdClose size={32} color="#fff" />
      ) : (
        <IoMdMenu size={32} color="#fff" />
      )}
    </button>
  );
};

export default AsideBtn;
