import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { insertDocument } from "../../redux/actions";

const NewDocumentBtn = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(insertDocument());
    toast.success("New Document Created");
  };

  return (
    <button className="primary-btn w-full p-3 rounded-md mt-7" onClick={onClickHandler}>
      <span>+ New Document</span>
    </button>
  );
};

export default NewDocumentBtn;
