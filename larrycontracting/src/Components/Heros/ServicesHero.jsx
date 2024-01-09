import React from "react";
import { styles } from "../../styles";

const ServicesHero = () => {
  return (
    <div className="bg-services-hero bg-cover bg-no-repeat bg-center h-1/2">
      <section className="relative w-full h-[80vh] mx-auto bg-slate-900/45">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 underline animate-fadeInLeft`}
            >
              Our Services
            </p>
            <h1
              className={`${styles.heroHeadText} text-white animate-fadeInRight`}
            >
              We Guarantee Your Satisfaction!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHero;
