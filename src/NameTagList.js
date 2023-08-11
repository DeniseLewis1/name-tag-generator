import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = ({ names, removeName }) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={removeName}
      index={index}
    />
  );
  const NameTagElements = names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;
