import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto 
                 p-14 md:px-20 lg:px-32 w-full"
      id="About"
    >
      {/* HEADING */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full">
        
        {/* IMAGE */}
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full md:w-1/2 max-w-lg flex-shrink-0"
        />

        {/* EXPERIENCE + TEXT */}
        <div className="flex flex-col items-center md:items-start 
                        text-gray-600 w-full md:w-1/2">

          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Asset Solution is a trusted real estate company focused on buying,
            selling, and developing properties. We deliver modern homes and
            quality buildings with long-term value and transparency.
          </p>

          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
