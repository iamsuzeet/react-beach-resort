import React from "react";

const CheckboxInput = ({ label, nameType, breakfast, handleChange }) => {
  return (
    <div className="single-extra">
      <input
        type="checkbox"
        name={nameType}
        id={nameType}
        checked={breakfast}
        onChange={handleChange}
      />
      <label htmlFor={nameType}>{label}</label>
    </div>
  );
};

export default CheckboxInput;
