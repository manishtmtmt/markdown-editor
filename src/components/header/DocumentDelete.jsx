import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

import DeletePrompt from "./DeletePrompt";

const DocumentDelete = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const onClickHandler = () => setIsPromptOpen(true);
  return (
    <>
      <DeletePrompt isOpen={isPromptOpen} setIsPromptOpen={setIsPromptOpen} />
      <button
        className={`ml-auto ${!activeDoc ? "invisible" : ""}`}
        onClick={onClickHandler}
      >
        <RiDeleteBin6Line size={24} color="#7C8187" />
        <span className="sr-only">delete markdown document</span>
      </button>
    </>
  );
};

export default DocumentDelete;
