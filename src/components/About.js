import React from "react";
import nyhs from "../assets/nyhs.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Stephen Danso and I am an AWS Solutions Architect
          </p>
          <p className="pb-5">
            I have experience across various AWS cloud services and development frameworks including React.js and Tailwind CSS.
          </p>

<br></br>
          <p>
            
          </p>
        </div>

        <div className="nyhs-img">
          <img
            src={nyhs}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
