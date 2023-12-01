import React, { useState } from "react";
import { data } from "../assets/data";
import JobItem from "./JobItem";
import JobFilters from "./JobFilters";

const Job = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedContracts, setSelectedContracts] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleLanguageFilter = (language) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(language)
        ? prevLanguages.filter((lang) => lang !== language)
        : [...prevLanguages, language]
    );
  };

  const handleToolFilter = (tool) => {
    setSelectedTools((prevTools) =>
      prevTools.includes(tool)
        ? prevTools.filter((t) => t !== tool)
        : [...prevTools, tool]
    );
  };

  const handleRoleFilter = (role) => {
    setSelectedRoles((prevRoles) =>
      prevRoles.includes(role)
        ? prevRoles.filter((r) => r !== role)
        : [...prevRoles, role]
    );
  };

  const handleLevelFilter = (level) => {
    setSelectedLevels((prevLevels) =>
      prevLevels.includes(level)
        ? prevLevels.filter((l) => l !== level)
        : [...prevLevels, level]
    );
  };

  const handleContractFilter = (contract) => {
    setSelectedContracts((prevContracts) =>
      prevContracts.includes(contract)
        ? prevContracts.filter((c) => c !== contract)
        : [...prevContracts, contract]
    );
  };

  const handleLocationFilter = (location) => {
    setSelectedLocations((prevLocations) =>
      prevLocations.includes(location)
        ? prevLocations.filter((loc) => loc !== location)
        : [...prevLocations, location]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedLanguages([]);
    setSelectedTools([]);
    setSelectedRoles([]);
    setSelectedLevels([]);
    setSelectedContracts([]);
    setSelectedLocations([]);
  };

  const filterJobs = () => {
    return data.jobsMenu.jobs.filter((job) => {
      const hasSelectedLanguages =
        selectedLanguages.length === 0 ||
        selectedLanguages.every((lang) => job.languages.includes(lang));

      const hasSelectedTools =
        selectedTools.length === 0 ||
        selectedTools.every((tool) => job.tools.includes(tool));

      const hasSelectedRoles =
        selectedRoles.length === 0 || selectedRoles.includes(job.role);

      const hasSelectedLevels =
        selectedLevels.length === 0 || selectedLevels.includes(job.level);

      const hasSelectedContracts =
        selectedContracts.length === 0 ||
        selectedContracts.includes(job.contract);

      const hasSelectedLocations =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);

      return (
        hasSelectedLanguages &&
        hasSelectedTools &&
        hasSelectedRoles &&
        hasSelectedLevels &&
        hasSelectedContracts &&
        hasSelectedLocations
      );
    });
  };

  const JobItemMap = () => {
    const filteredJobs = filterJobs();

    if (filteredJobs.length === 0) {
      return (
        <div className="text-center flex justify-center items-center text-[#63baba] font-semibold text-lg mt-8">
          No matching jobs found.
        </div>
      );
    }

    return (
      <>
        {filteredJobs.map((job) => (
          <JobItem
            key={job.id}
            company={job.company}
            logo={job.logo}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            latest={job.latest}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="mt-5 my-2 p-2 ">
          <JobFilters
            selectedLanguages={selectedLanguages}
            selectedTools={selectedTools}
            selectedRoles={selectedRoles}
            selectedLocations={selectedLocations}
            handleLanguageFilter={handleLanguageFilter}
            handleToolFilter={handleToolFilter}
            handleLevelFilter={handleLevelFilter}
            selectedContracts={selectedContracts}
            handleContractFilter={handleContractFilter}
            handleLocationFilter={handleLocationFilter}
            handleRoleFilter={handleRoleFilter}
            handleClearAllFilters={handleClearAllFilters}
          />
        </div>
        <div className="flex lg:w-full cursor-pointer font-Spartan justify-center px-5 lg:px-10 mt-5 my-2 items-center flex-col">
          <JobItemMap />
        </div>
      </div>
    </>
  );
};

export default Job;
