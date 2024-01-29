import React from "react";
import productImage from "../assets/pana.svg";
import { FaArrowCircleRight, FaBookOpen, FaBug } from "react-icons/fa";
import {
  FaBahtSign,
  FaCannabis,
  FaCodeCompare,
  FaDiagramPredecessor,
} from "react-icons/fa6";
const Products = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        <div>
          <img src={productImage} alt="Product Image" />
        </div>
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
            Elevate Your Website's Design with Our Footer Design Tips
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGray mb-8">
            Discover the secrets to creating an engaging and effective website
            footer. Learn how to enhance user experience, drive conversions, and
            showcase essential information. Elevate your website's design with
            our expert tips and best practices.
          </p>
          <button className="btn-primary">Learn more</button>
        </div>
      </div>

      {/* Company Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3 mb-5">
            <img
              src="/src/assets/customer2.jpeg"
              width={200}
              height={150}
              alt="Customer Testimonial"
              className="rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Customer Testimonial and Statistics */}
          <div className="md:w-2/3 mx-auto mt-12">
            <div>
              <p className="text-black md:w-4/5 mb-3 text-sm leading-5">
                "My name is Amrit Sapkota, and I am delighted to share my
                positive experiences working with DevAmrit Coding Association.
                Having recently joined their team, I have been thoroughly
                impressed by the professionalism and dedication exhibited by
                every member of the organization. DevAmrit Coding Association
                boasts a stellar team that consistently delivers high-quality
                work, making my time with them exceptionally rewarding. The
                commitment to excellence within the organization is evident in
                every project undertaken."
              </p>
              <h1 className="font-semibold text-brandPrimary mb-2">
                Amrit Sapkota
              </h1>
              <p className="text-neutralGray text-sm">
                DevAmrit Coding Association
              </p>
            </div>
            <div>
              <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <FaBahtSign className="text-3xl" />
                <FaBookOpen className="text-3xl" />
                <FaBug className="text-3xl" />
                <FaCannabis className="text-3xl" />
                <FaCodeCompare className="text-3xl" />
                <FaDiagramPredecessor className="text-3xl" />
                <h2 className="text-brandPrimary flex gap-2 items-center hover:text-neutral-700 cursor-pointer">
                  Meet all Customers
                  <span className="cursor-pointer">
                    <FaArrowCircleRight />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
