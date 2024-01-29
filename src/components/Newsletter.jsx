import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-3/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            How to design your site footer like we did in our website?
          </h2>
          <div className="flex items-center justify-center">
            <button className="btn-primary text-white flex items-center">
              Get a demo
              <span className="inline-block  ml-2 ">
                <FaArrowCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
