import React from "react";
import CareersHeader from "./CareersHeader";
import SearchBar from "./SearchBar";
import CareersContent from "./CareersContent";

const page = () => {
  return (
    <div>
      <CareersHeader />
      <div className="px-[30px] py-16">{/* <SearchBar /> */}</div>
      <CareersContent />
    </div>
  );
};

export default page;
