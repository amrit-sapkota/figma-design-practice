import React from "react";
import aboutImage from "../assets/aboutus.svg";
import { PiMaskHappyLight } from "react-icons/pi";
import { MdOutlineBookmarks } from "react-icons/md";
import { SiOnlyfans } from "react-icons/si";
import { VscSymbolNamespace } from "react-icons/vsc";
const About = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        <div>
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
            Empowering Success Through Innovative Solutions
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGray mb-8">
            At DevAmrit, we embark on a journey of innovation and collaboration.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veritatis voluptatem architecto iusto voluptates id quas assumenda
            officia repellat harum magni ipsam accusamus, unde vel rerum rem
            recusandae impedit dolores!
          </p>
          <button className="btn-primary">Learn more</button>
        </div>
      </div>
      {/* Company Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-3/3">
              Transforming Businesses{" "}
              <span className="text-brandPrimary">
                with Cutting-Edge Solutions
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              We are dedicated to helping businesses thrive in the digital era.
              Our team of passionate developers believes in harnessing the power
              of code to create impactful solutions and drive business growth.
            </p>
          </div>

          {/* Company Statistics */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <PiMaskHappyLight className="text-4xl" />
                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    100+
                  </h4>
                  <p>Happy customers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineBookmarks className="text-4xl" />
                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    200+
                  </h4>
                  <p>Successful Events</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <VscSymbolNamespace className="text-4xl" />
                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    500+
                  </h4>
                  <p>Events Booking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SiOnlyfans className="text-4xl" />
                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    100k+
                  </h4>
                  <p>Awesome Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
