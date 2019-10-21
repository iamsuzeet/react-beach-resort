import React from "react";

const RangeInput = ({
  nameType,
  valueType,
  label,
  minPrice,
  maxPrice,
  handleChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={nameType}>
        {label} ${valueType}
      </label>
      <input
        type="range"
        name={nameType}
        id={nameType}
        min={minPrice}
        max={maxPrice}
        value={valueType}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default RangeInput;
