import React from "react";
import { styles } from "../styles";

const AboutHero = () => {
  return (
    <div className="bg-about-hero bg-cover bg-no-repeat bg-center h-1/2">
      <section className="relative w-full h-screen mx-auto bg-slate-900/35">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            {/* the red dot */}
            <div className="w-5 h-5 rounded-full  " />
            {/* the line coming down */}
            <div className="w-1 sm:h-80 h-40 " />
          </div>
          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              About Us
            </p>
            <h1 className={`${styles.heroHeadText} text-white `}>
              Bringing Quality Contracting to Central Florida
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
