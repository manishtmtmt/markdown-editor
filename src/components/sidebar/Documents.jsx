import React from "react";
import { useSelector } from "react-redux";

import Document from "./Document";

const Documents = () => {
  const documents = useSelector((state) => state.docs.documents);
  return (
    <ul className="overflow-y-auto max-h-[70vh]">
      {documents
        ? documents.map((item) => (
            <Document
              key={item.id}
              id={item.id}
              createdAt={item.createdAt}
              name={item.name}
            />
          ))
        : null}
    </ul>
  );
};

export default Documents;
