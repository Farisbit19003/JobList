
import React from "react";

const FilterButton = ({ value, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-[#63baba]" : "bg-[#2c3a3a]"
      } py-1 px-2 rounded-md text-center items-center text-white mx-2 font-semibold`}
    >
      {value}
    </button>
  );
};

export default FilterButton;
