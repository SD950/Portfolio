import React from "react";
import ny from "../assets/ny.jpg";
import sdlogo from "../assets/sd-logo.png";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-22">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="hero-info text-center">
          <h1 className="text-4xl lg:text-8xl">
           SD Portfolio
          </h1>

          <p className="py-5">
          </p>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
