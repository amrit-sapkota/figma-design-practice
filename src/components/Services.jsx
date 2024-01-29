import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8 ">
        <h2 className="font-semibold text-neutralGray text-4xl mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGray">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logos */}
        <div className="my-12 p-5 flex flex-wrap justify-between items-center gap-8 ">
          <img src="/src/assets/logos/logo1.png" alt="" />
          <img src="/src/assets/logos/logo2.png" alt="" />
          <img src="/src/assets/logos/logo3.png" alt="" />
          <img src="/src/assets/logos/logo4.png" alt="" />
          <img src="/src/assets/logos/logo5.png" alt="" />
          <img src="/src/assets/logos/logo6.png" alt="" />
          <img src="/src/assets/logos/logo7.png" alt="" />
        </div>
      </div>
      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="font-semibold text-neutralGray text-4xl mb-3">
          Manage your business with our services in single System
        </h2>
        <p className="text-neutralGray">Who is necent suitable for?</p>
      </div>
      {/* card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img
                  src={service.image}
                  alt="services image"
                  className="-ml-5"
                />
              </div>
              <h4 className="text-2xl font-bold text-neutralGray mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGray">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
