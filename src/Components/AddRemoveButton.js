import React from "react";

const AddRemoveButton = ({ addRemoveFunc, buttonName, count }) => {
  return (
    <>
      <button
        onClick={() => {
          addRemoveFunc(count);
        }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default AddRemoveButton;
