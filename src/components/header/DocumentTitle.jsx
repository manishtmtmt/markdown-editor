import React from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { documentActions } from "../../redux/document-slice";

const DocumentTitle = () => {
  const activeDoc = useSelector((state) => state.docs.activeDoc);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    if (!activeDoc) return;

    dispatch(
      documentActions.updateName({
        id: activeDoc?.id,
        name: e.target.value,
      })
    );
  };

  const copyMarkdown = () => {
    let content = activeDoc?.content;
    if (content) {
      try {
        navigator.clipboard.writeText(content);
        toast.success("Markdown Copied");
      } catch (error) {
        toast.error("Copy failed");
      }
    } else {
      toast.error("Nothing to copy");
    }
  };
  return (
    <div className="relative flex items-center overflow-x-auto">
      <button onClick={copyMarkdown}>
        <MdContentCopy size={20} color="#fff" />
      </button>
      <div className="ml-4">
        <label
          htmlFor="docName"
          className="hidden text-neutral-600 text-xs leading-none md:block"
        >
          Document Name
        </label>
        <input
          type="text"
          className="text-white outline-none border-b focus:border-b-neutral-800 caret-primary-100 selection:bg-primary-100 bg-[transparent] border-b-[transparent]"
          value={activeDoc ? activeDoc.name : ""}
          disabled={activeDoc ? false : true}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
