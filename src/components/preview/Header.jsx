import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { documentActions } from "../../redux/document-slice";

const Header = () => {
  const dispatch = useDispatch();
  const isPreview = useSelector((state) => state.docs.isPreview);

  const onClickHandler = () => {
    dispatch(documentActions.togglePreview());
  };
  return (
    <div className="bg-neutral-900 dark:bg-neutral-200 px-4 py-3 flex justify-between items-center">
      <span className="font-medium text-neutral-600 dark:text-neutral-700 text-sm tracking-widest uppercase">
        Preview
      </span>
      <button onClick={onClickHandler}>
        <span className="sr-only">hide preview</span>
        {isPreview ? (
          <FaRegEyeSlash size={20} color="#7C8187" />
        ) : (
          <FaRegEye size={20} color="#7C8187" />
        )}
      </button>
    </div>
  );
};

export default Header;
