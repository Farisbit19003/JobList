import React from "react";
import FilterButton from "./FilterButton";

const FilterList = ({ data, filterKey, selectedFilters, onClick }) => {
  return (
    <div>
      <h3>{filterKey}:</h3>
      <div className="flex flex-wrap gap-2">
        {data
          .flatMap((job) => job[filterKey])
          .filter((filter, index, self) => self.indexOf(filter) === index)
          .map((filter, index) => (
            <FilterButton
              key={index}
              value={filter}
              isSelected={selectedFilters.includes(filter)}
              onClick={() => onClick(filter)}
            />
          ))}
      </div>
    </div>
  );
};

export default FilterList;
