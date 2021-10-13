import React from "react";

const Icon = (props) => {
  const {
    name,
    background,
    text,
  } = props;

  return text ? (
    <span
      className={`custom-icon text`}
    >
      {name}
    </span>
  ) : (
    <span
      className={`material-icons custom-icon ${
        !background ? "no-background" : ""
      }`}
    >
      {name}
    </span>
  );
};

export default Icon;
