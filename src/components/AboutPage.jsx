import React from "react";
import homeImage from "../assets/img/homeImage.jpg";
import { IMAGES } from "../constants";
import logo from "../assets/img/chrisroof.png";
import { Link } from "react-router-dom";;

const photosIndex = [29, 33, 29];
const AboutPage = () => {
  return (
    <>
      <section className="text-center md:w-2/5 mx-auto flex-col pt-10 pb-10">
        <h2 className="flex justify-center text-5xl text-slate-700">
          Discover Our Journey
        </h2>
        <p className="pl-2 pr-2 md:flex justify pt-6 pb-12 leading-relaxed">
          Welcome to LGC – Your Trusted Partner in Home Solutions! I'm Larry,
          the face behind the tools. With a passion for craftsmanship and a
          commitment to excellence, LGC is here to transform your house into a
          home. With years of experience in fixing, building, and renovating, I
          take pride in delivering top-notch handyman services tailored to your
          needs. From small repairs to major renovations, trust LGC for quality
          workmanship and a friendly touch. Let's turn your vision into reality
          – where every nail, every paint stroke, and every detail speaks of
          care and dedication. Your satisfaction is our priority at LGC – Your
          Home, Our Craft.
        </p>
        <aside className="p-2 shadow-xl shadow-slate-400 rounded-lg md:p-0">
          <img
            src={homeImage}
            alt="Filler Photo."
            className="rounded-t-lg rounded-tr-lg"
          ></img>
          <p className="pt-3 pb-3 text-center font">
            We are dedicated to finishing our projects promptly and with a high
            level of professionalism. Choosing LGC for your needs will be a
            decision you won't regret!
          </p>
        </aside>
      </section>

      {/* <section className="bg-slate-500">
        <div className="pl-2 pr-2 md: w-3/4 mx-auto pb-10">
          <h1 className="text-white pt-10 pb-10 text-6xl flex-col text-center">
            Meet our crew
          </h1>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-32">
            {photosIndex.map((index) => {
              const image = IMAGES[index];
              return (
                <div className="rounded-b-3xl" key={index}>
                  <img
                    src={image.url}
                    alt={`Crew Member ${index}`}
                    className="rounded-t-3xl"
                  />
                  <div className="bg-white rounded-b-3xl">
                    <h2 className="text-center text-lg text-slate-700 pt-3 font-medium">{`Crew Member ${
                      index + 1
                    }`}</h2>
                    <h3 className="text-center text-slate-600 pb-3">
                      {image.role}
                    </h3>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </section> */}
      
      <section className="bg-gray-300 pt-7 pb-10">
        <div className="md:grid grid-cols-5">
          <div></div>
          <img src={logo} alt="Our logo" className="h-36 justify-self-center hidden md:block" />
          <div className="md:col-span-2 text-center">
            <h2 className="text-2xl pb-3">Get to know our team!</h2>
            <p className="pb-5">
              Meet our team for any project you're thinking about. Our friendly
              crew can help with any small or big issues you might have. Whether
              it's a simple task or something more complicated, our team is here
              to assist you with a smile!
            </p>
            <Link to="/contact" className="text-white border rounded-3xl p-1 pr-3 pl-3 bg-slate-500">Get a quote today!</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
