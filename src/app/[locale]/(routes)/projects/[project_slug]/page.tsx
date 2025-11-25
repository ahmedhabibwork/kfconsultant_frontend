import React from "react";
import ProjectHeader from "./projectHeader";
import ProjectDetailsSection, {
  ProjectData,
} from "./components/ProjectDetailsSection";

const page = () => {
  // This data should eventually come from your API/database
  const projectData: ProjectData = {
    title: "Privado",
    description:
      "Privado, as a Spanish alternative for the privacy of a gated compound, is a luxurious community located on parcels B09 and B13 in Madinaty.\n\nCovering an expansive 275 acres, the project is adjacent to the Madinaty Central Park with a connection to its facilities and services that emphasize the value of the project and quality for residents.\n\nThe project accommodates 10,000 units of apartment buildings with 7 different types, Retail & Admin buildings, a Mosque, and a nursery with all the needed amenities.",
    client: "Talaat Moustafa Group",
    type: "Residential",
    services: [
      "Masterplan & Landscape",
      "Architecture",
      "Infrastructure & MEP",
      "Structure",
    ],
    location: "New Cairo, Egypt",
    images: [
      "https://admin.dma-mea.com/storage/01J9RHPNX281E7DVKNFS45TR34.jpg",
      "https://admin.dma-mea.com/storage/01J9RHRJTWQWCX1P5ESTFM1CKN.jpg",
      "https://admin.dma-mea.com/storage/01J9RHSK0TGSC0XW5QJJTTHZE6.jpg",
    ],
  };

  return (
    <>
      <ProjectHeader />
      <ProjectDetailsSection project={projectData} />
    </>
  );
};

export default page;
