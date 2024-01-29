import { Carousel } from "flowbite-react";
import React from "react";
import illustration from "../assets/illustration.png";
const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div
        className="px-2 lg:px-14 max-w-screen-2xl mx-auto
     min-h-screen h-screen"
      >
        <Carousel className="w-full mx-auto ">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={illustration} alt="first carousel image" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 7 years
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={illustration} alt="first carousel image" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 7 years
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={illustration} alt="first carousel image" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 7 years
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
