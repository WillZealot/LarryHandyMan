import React from "react";
import { styles } from "../../styles";
import { services } from "../../constants";
import { useParams } from "react-router-dom";

const ServiceIDHero = () => {
  let { id } = useParams();
  const filteredService = services.find((service) => service.service_id === id);
  return (
    <div className="bg-service-hero bg-cover bg-no-repeat bg-center h-1/2">
      <section className="relative w-full h-[90vh] mx-auto bg-slate-900/45">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 underline animate-fadeInLeft`}
            >
              We Guarantee Your Satisfaction!
            </p>
            <h1
              className={`${styles.heroHeadText} text-white animate-fadeInRight`}
            >
              {filteredService.title}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceIDHero;
