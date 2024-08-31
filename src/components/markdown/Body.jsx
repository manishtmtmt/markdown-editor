import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { insertDocument } from "../../redux/actions";
import { documentActions } from "../../redux/document-slice";

const Body = () => {
  const dispatch = useDispatch();
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const newDoc = () => {
    dispatch(insertDocument());
  };

  if (!activeDoc)
    return (
      <div className="m-4">
        <button className="primary-btn rounded-md" onClick={newDoc}>
          Create New
        </button>
      </div>
    );

  const updateContent = (e) => {
    if (!activeDoc) return;

    dispatch(documentActions.updateMarkdown(e.target.value));
  };

  return (
    <>
      <label htmlFor="markdownEditor" className="sr-only">
        Markdown Editor
      </label>
      <textarea
        name="markdown"
        className="w-full bg-white dark:bg-neutral-100 dark:text-neutral-700 p-4 font-mono text-sm"
        value={activeDoc?.content ? activeDoc.content : ""}
        onChange={updateContent}
      ></textarea>
    </>
  );
};

export default Body;
