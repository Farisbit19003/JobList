import React, { useState } from "react";
const JobItem = ({
  company,
  logo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  latest,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`${
        isClicked ? "border-l-4 border-[#63baba]" : ""
      } bg-white rounded-md cursor-pointera shadow-lg gap-2 lg:my-2 my-5 w-full h-fit p-2 `}
      onClick={handleClick}
    >
      <div className="w-full justify-between  items-center flex p-2 flex-col lg:flex-row">
  
          <img
            src={logo}
            alt=""
            className="lg:h-full lg:w-fit w-3/12 lg:my-0 mb-2 -mt-10 "
          />
        
        <div className="flex items-center justify-start ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <span className="text-[#63baba] text-center items-center justify-center flex font-semibold">
                {company}
              </span>

              {latest && (
                <span className="uppercase text-xs items-center justify-center flex  px-2 rounded-s-2xl rounded-e-2xl  text-white font-semibold bg-[#63baba]">
                  New!
                </span>
              )}
              {featured && (
                <span className="uppercase text-xs items-center justify-center flex  px-2  rounded-s-2xl rounded-e-2xl text-white font-semibold bg-[#2c3a3a]">
                  Featured
                </span>
              )}
            </div>

            <div className="text-[#2c3a3a] text-lg font-bold"> {position}</div>
            <div className="flex px-1 gap-4 w-full items-center text-sm font-semibold text-[#818080] justify-between">
              <p>{postedAt}</p>
              <p>{contract}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:justify-end">
          <div className="flex justify-between w-fit lg:gap-2 items-center flex-wrap gap-1 ">
            <hr className="w-full flex mb-2 lg:hidden" />
            <div className="bg-[#EFFAFA] font-semibold lg:gap-2 text-[#63baba] py-1 lg:px-2 px-1 text-sm lg:text-base">
              {role}
            </div>
            <div className="bg-[#EFFAFA] font-semibold lg:gap-2 text-[#63baba] py-1 lg:px-2 px-1 text-sm lg:text-base">
              {level}
            </div>
            <div className="flex gap-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-[#EFFAFA] lg:gap-2 font-semibold text-[#63baba] py-1 flex flex-wrap lg:px-2 px-1 text-sm lg:text-base"
                >
                  {language}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-[#EFFAFA] gap-2 font-semibold text-[#63baba] py-1 lg:px-2 px-1 text-sm lg:text-base"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobItem;
