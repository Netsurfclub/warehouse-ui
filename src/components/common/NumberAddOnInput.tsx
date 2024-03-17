import React from "react";

import ErrorMessage from "./ErrorMessage";

const NumberAddOnInput: React.FC<NumberAddOnInputProps> = ({
  name,
  value,
  minValue,
  addOnText,
  errorMessage = "",
}) => {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
        />
        <span className="input-group-text">{addOnText}</span>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default NumberAddOnInput;
