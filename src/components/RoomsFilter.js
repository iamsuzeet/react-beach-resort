import React from "react";
import { useContext } from "react";
import RoomContext from "./../contexts/RoomProvider";
import Title from "./Title";
import SelectInput from "./SelectInput";
import { getUniqueOption } from "./../utility/getUnique";
import RangeInput from "./RangeInput";
import NumberInput from "./NumberInput";
import CheckboxInput from "./CheckboxInput";

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //get uniques room and option types
  let types = getUniqueOption(rooms, "type", "room");

  //get unique count of people and option types
  let people = getUniqueOption(rooms, "capacity", "capacity");

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select room type */}
        <SelectInput
          valueType={type}
          nameType="type"
          label="room type"
          handleChange={handleChange}
        >
          {types}
        </SelectInput>
        {/* end select type */}
        {/* select guest  */}
        <SelectInput
          valueType={capacity}
          nameType="capacity"
          label="Guests"
          handleChange={handleChange}
        >
          {people}
        </SelectInput>
        {/* end select type */}
        {/* room price range */}
        <RangeInput
          nameType="price"
          label="room price"
          valueType={price}
          handleChange={handleChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        {/* end of room price input */}
        {/* room size */}
        <NumberInput
          label="room size in Square ft"
          nameType="size"
          minSize={minSize}
          maxSize={maxSize}
          handleChange={handleChange}
        />
        {/* end of room size */}
        {/* extras option checkbox */}
        <div className="form-group">
          <CheckboxInput
            label="Breakfast"
            breakfast={breakfast}
            nameType="breakfast"
            handleChange={handleChange}
          />
          <CheckboxInput
            label="Pets"
            breakfast={pets}
            nameType="pets"
            handleChange={handleChange}
          />
        </div>
        {/* end of option checkbox */}
      </form>
    </section>
  );
};

export default RoomsFilter;
