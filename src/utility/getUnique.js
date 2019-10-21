import React from "react";

//get all unique values
export const getUniqueOption = (items, value, optionFor) => {
  let types = [...new Set(items.map(item => item[value]))];
  return getOption(types, optionFor);
};

export const getOption = (types, type) => {
  types.sort();
  //add all if room
  if (type === "room") {
    types.sort();
    types = ["all", ...types];
  }

  types.sort(function(a, b) {
    return a - b;
  });
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return types;
};
