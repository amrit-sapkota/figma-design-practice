import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      id="connect"
    >
      <div className="flex items-center justify-center lg:w-4/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-neutralGray mb-8">
            Subscribe to our newsletter to receive the latest updates, coding
            tips, and industry insights. Join our community of developers and
            stay ahead in the ever-evolving world of technology.
          </p>
          <div className="flex items-center justify-center">
            <button className="btn-primary text-white flex items-center">
              Subscribe Now
              <span className="inline-block ml-2">
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
