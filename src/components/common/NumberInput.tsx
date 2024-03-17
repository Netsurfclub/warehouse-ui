import React from "react";

import ErrorMessage from "./ErrorMessage";

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  minValue,
  labelText,
  errorMessage = "",
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default NumberInput;
