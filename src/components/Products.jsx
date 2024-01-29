import React from "react";
import productImage from "../assets/pana.svg";
import { FaArrowCircleRight } from "react-icons/fa";
const Products = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
        <div>
          <img src={productImage} alt="" />
        </div>
        <div className="md:w-4/5 mx-auto">
          <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
            How to design your site footer like we did in our website?
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
          <div className="md:w-1/3">
            <img src="/src/assets/image9.svg" alt="" />
          </div>

          {/* statistics */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p
                className="text-black md:w-4/5
               mb-3 text-sm leading-5"
              >
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h1 className="font-semibold text-brandPrimary mb-2">
                Amrit Sapkota
              </h1>
              <p className="text-neutralGray text-sm ">
                British Dragon Boat Racing Association
              </p>
            </div>
            <div>
              <div className="my-12  flex flex-wrap justify-between items-center gap-8">
                <img
                  src="/src/assets/logos/logo1.png"
                  alt=""
                  className="cursor-pointer"
                />
                <img
                  src="/src/assets/logos/logo2.png"
                  alt=""
                  className="cursor-pointer"
                />
                <img
                  src="/src/assets/logos/logo3.png"
                  alt=""
                  className="cursor-pointer"
                />
                <img
                  src="/src/assets/logos/logo4.png"
                  alt=""
                  className="cursor-pointer"
                />
                <img
                  src="/src/assets/logos/logo5.png"
                  alt=""
                  className="cursor-pointer"
                />
                <img
                  src="/src/assets/logos/logo6.png"
                  alt=""
                  className="cursor-pointer"
                />
                <h2 className="text-brandPrimary flex gap-2 items-center">
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
