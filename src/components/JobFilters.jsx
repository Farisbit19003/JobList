import React, { useState } from "react";
import { data } from "../assets/data";
import { Drawer } from "antd";
import FilterList from "../common/FilterList";

const JobFilters = ({
  selectedLanguages,
  selectedTools,
  selectedRoles,
  handleContractFilter,
  handleLanguageFilter,
  handleToolFilter,
  handleRoleFilter,
  selectedContracts,
  handleLocationFilter,
  selectedLocations,
  handleClearAllFilters,
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div className="hidden font-Spartan lg:flex gap-2 flex-col border-[#63baba] border-2  p-2 rounded">
        <div className="font-semibold uppercase">
          <p>Filters</p>
        </div>
        <FilterList
        data={data.jobsMenu.jobs}
        filterKey="languages"
        selectedFilters={selectedLanguages}
        onClick={handleLanguageFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="tools"
        selectedFilters={selectedTools}
        onClick={handleToolFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="role"
        selectedFilters={selectedRoles}
        onClick={handleRoleFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="contract"
        selectedFilters={selectedContracts}
        onClick={handleContractFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="location"
        selectedFilters={selectedLocations}
        onClick={handleLocationFilter}
      />

        {/* Clear All Filters button */}
        <button
          className="bg-[#2c3a3a] p-2 transition-transform hover:scale-95 rounded-md text-[#63baba]"
          onClick={handleClearAllFilters}
        >
          Clear All Filters
        </button>
      </div>

      {/* Drawer for small screens */}
      <div className="lg:hidden">
        <button
          className="bg-[#2c3a3a] p-2 rounded-md transition-transform hover:scale-95 text-[#63baba] "
          onClick={showDrawer}
        >
          Filters
        </button>
        <Drawer
          title="Job Filters"
          placement="left"
          closable={false}
          onClose={onClose}
          open={drawerVisible}
        >
          {/* Content of the drawer */}
          <div className="overflow overflow-y-auto">
          <FilterList
        data={data.jobsMenu.jobs}
        filterKey="languages"
        selectedFilters={selectedLanguages}
        onClick={handleLanguageFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="tools"
        selectedFilters={selectedTools}
        onClick={handleToolFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="role"
        selectedFilters={selectedRoles}
        onClick={handleRoleFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="contract"
        selectedFilters={selectedContracts}
        onClick={handleContractFilter}
      />

      <FilterList
        data={data.jobsMenu.jobs}
        filterKey="location"
        selectedFilters={selectedLocations}
        onClick={handleLocationFilter}
      />
          </div>
          <footer className="fixed bottom-0  w-full max-w-xs bg-white py-5  ">
            <div className="flex justify-around items-center border-t-2 p-2 border-[#63baba]">
              {/* Close button */}
              <button
                className="bg-[#2c3a3a] p-2 rounded-md text-[#63baba]"
                onClick={onClose}
              >
                Close
              </button>

              {/* Clear All Filters button */}
              <button
                className="bg-[#2c3a3a] p-2 rounded-md text-[#63baba]"
                onClick={handleClearAllFilters}
              >
                Clear All Filters
              </button>
            </div>
          </footer>
        </Drawer>
      </div>
    </>
  );
};

export default JobFilters;
