import React from "react";

import ErrorMessage from "./ErrorMessage";

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  value,
  maxLength,
  labelText,
  errorMessage = "",
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value}
          minLength={0}
          maxLength={maxLength}
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default TextInput;
