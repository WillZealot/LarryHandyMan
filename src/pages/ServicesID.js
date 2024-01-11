import React from "react";
import ServiceIDHero from "../components/Heros/ServiceIDHero";
import FilteredGallery from "../components/FilteredGallery";
import ServiceSpecifics from "../components/ServiceSpecifics";

const ServicesID = () => {
  return (
    <div>
      {/* <ServiceIDHero /> */}
      <ServiceSpecifics />
      <FilteredGallery />
    </div>
  );
};

export default ServicesID;
