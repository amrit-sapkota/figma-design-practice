import React from "react";
import aboutImage from "../assets/aboutus.svg";
const About = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        <div>
          <img src={aboutImage} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
            The unseen of spending three years at PixelGrade
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGray mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veritatis voluptatem architecto iusto voluptates id quas assumenda
            officia repellat harum magni ipsam accusamus, unde vel rerum rem
            recusandae impedit dolores!
          </p>
          <button className="btn-primary">Learn more</button>
        </div>
      </div>
      {/* company starts */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-2/3">
              Helping companies <br />{" "}
              <span className="text-brandPrimary">to grow their business</span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              We reached here by working hard and smart. We are a team of
              passionate developers who believe in the power of code to make the
              world a better place.
            </p>
          </div>

          {/* statistics */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8 ">
              <div className="flex items-center gap-4 ">
                <img src="/src/assets/logos/stat1.svg" alt="svg" />

                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    100+
                  </h4>
                  <p>Happy customers</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <img src="/src/assets/logos/stat2.svg" alt="svg" />

                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    200+
                  </h4>
                  <p>Successfull Events</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 ">
                <img src="/src/assets/logos/stat3.svg" alt="svg" />

                <div>
                  <h4 className="text-2xl text-neutralGray font-semibold">
                    500+
                  </h4>
                  <p>Events Booking</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <img src="/src/assets/logos/stat4.svg" alt="svg" />

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
