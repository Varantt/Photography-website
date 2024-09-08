import React from "react";
import './hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-[80vh] flex items-center content-center ">
      <div className="hero-content flex  items-center justify-between w-full md:flex-row gap-12  rounded-default h-full ">
        {/* <div className="hero-image-section w-1/2 bg-terciary rounded-default">
          <img src={heroImage} alt="hero-image" />
        </div> */}

        <div className="hero-info-section inline-flex h-fit  justify-center  w-full py-4 md:w-2/3 flex-col gap-1 bg-primary rounded-default  ">
         
          <h1 className="text-6xl font-bold text-nowrap	">Anni Manoukian</h1>
          <p className="text-xl text-dark">Photographer</p>
          <div className="btn mt-4 inline-block bg-terciary h-fit w-fit px-5 py-3 rounded-default  hover:bg-dark group ">
            <a href="" className="contact-me   text-dark font-medium group-hover:text-terciary">
              {" "}
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-section w-1/2 mt-6  bg-terciary rounded-default">
          {/* <img src={heroImage} alt="hero-image" /> */}
        </div>
      </div>
    </section>
  );
};
