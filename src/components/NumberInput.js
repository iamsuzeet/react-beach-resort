import React from "react";

const NumberInput = ({ nameType, label, minSize, maxSize, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={nameType}>{label}</label>
      <div className="size-inputs">
        <input
          className="size-input"
          type="number"
          name="minSize"
          id={nameType}
          value={minSize}
          onChange={handleChange}
        />
        <input
          className="size-input"
          type="number"
          name="maxSize"
          id={nameType}
          value={maxSize}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NumberInput;
