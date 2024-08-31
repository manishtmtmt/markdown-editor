import React from "react";
import toast from "react-hot-toast";
import { IoSaveOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { saveDocument } from "../../redux/actions";

const DocumentSave = () => {
  const dispatch = useDispatch();
  const activeDoc = useSelector((state) => state.docs.activeDoc);

  const onClickHandler = () => {
    dispatch(saveDocument());
    toast.success("Document Saved");
  };
  return (
    <button
      className="primary-btn p-2 rounded-md"
      onClick={onClickHandler}
      disabled={!activeDoc}
    >
      <IoSaveOutline size={20} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
};

export default DocumentSave;
