import React from "react";
import { FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { documentActions } from "../../redux/document-slice";

const Header = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(documentActions.togglePreview());
  };
  return (
    <div className="bg-neutral-900 dark:bg-neutral-200 px-4 py-3 flex justify-between items-center">
      <span className="font-medium text-neutral-600 dark:text-neutral-700 text-sm tracking-widest uppercase">
        Markdown
      </span>
      <button className="md:hidden" onClick={onClickHandler}>
        <FaRegEye size={20} color="#7C8187" />
      </button>
    </div>
  );
};

export default Header;
