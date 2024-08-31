import React from "react";

import Documents from "./Documents";
import NewDocumentBtn from "./NewDocumentBtn";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside className="sidebar relative px-6 py-7 bg-neutral-200 h-screen">
      <div>
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="my-7">
        <span className="text-neutral-600 font-medium uppercase text-sm tracking-widest">
          my documents
        </span>
        <NewDocumentBtn />
        <Documents />
      </div>
      <ThemeToggle />
    </aside>
  );
};

export default Sidebar;
