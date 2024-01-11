import React from "react";
import ServicesHero from "../components/Heros/ServicesHero";
import FilteredGallery from "../components/FilteredGallery";
import ServiceSpecifics from "../components/ServiceSpecifics";

const ServicesID = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceSpecifics />
      <FilteredGallery />
    </div>
  );
};

export default ServicesID;
