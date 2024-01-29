import { Carousel } from "flowbite-react";
import React from "react";
import illustration from "../assets/illustration.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-2 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          {/* Slide 1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={illustration} alt="first carousel image" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Learn to Code with Confidence
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  at Your Own Pace
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Unlock the power of coding and transform your career. Our
                hands-on courses are designed for beginners and experienced
                developers alike.
              </p>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={illustration} alt="second carousel image" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Master In-Demand Programming Skills
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  with Expert Guidance
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Stay ahead in the rapidly evolving tech industry. Our
                comprehensive courses cover languages like JavaScript, Python,
                and more.
              </p>
              <button className="btn-primary">Explore Courses</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={illustration} alt="third carousel image" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Join a Thriving Coding Community
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  and Boost Your Network
                </span>
              </h1>
              <p className="text-base mb-8 text-textGray">
                Connect with like-minded individuals, collaborate on projects,
                and access exclusive resources. Elevate your coding journey with
                our supportive community.
              </p>
              <button className="btn-primary">Join Now</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
