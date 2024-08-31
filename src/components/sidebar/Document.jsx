import React from "react";
import { GrDocument } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import { documentActions } from "../../redux/document-slice";

const Document = ({ name, id, createdAt }) => {
  const dispatch = useDispatch();
  const activeDocId = useSelector((state) => state.docs.activeDoc?.id);

  const setActiveDocument = () => {
    dispatch(documentActions.setActiveDocument(id));
  };
  return (
    <li className="overflow-x-hidden">
      <button
        className="group relative flex items-center overflow-x-auto mt-6"
        onClick={setActiveDocument}
      >
        <GrDocument color="#fff" size={20} />
        <span className="ml-4 block">
          <span className="hidden w-fit text-neutral-600 text-xs leading-none md:block">
            {createdAt}
          </span>
          <span
            className={`group-hover:text-primary-100 block text-left w-min ${
              activeDocId === id ? "text-primary-100" : "text-white"
            }`}
          >
            {name}
          </span>
        </span>
      </button>
    </li>
  );
};

export default Document;
