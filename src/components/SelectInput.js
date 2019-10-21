import React from "react";

const SelectInput = ({
  valueType,
  nameType,
  children,
  label,
  handleChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={nameType}>{label}</label>
      <select
        className="form-control"
        name={nameType}
        id={nameType}
        value={valueType}
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
