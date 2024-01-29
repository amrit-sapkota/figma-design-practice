import React from "react";
import { blogs } from "../constants";
import { FaArrowCircleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralGray font-semibold mb-4 ">
          Caring is
          <span className="text-brandPrimary"> the New Marketing</span>
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGray mb-8 mx-auto">
          At DevAmrit, we believe in the power of caring. Our team works
          diligently to deliver valuable insights, tutorials, and updates to
          empower you on your coding journey.
        </p>
      </div>
      {/* cards of blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="mx-auto relative mb-12 cursor-pointer"
            >
              <img
                src={blog.image}
                alt={`Blog ${blog.id}`}
                className="hover:scale-95 transition-all duration-300"
              />
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                <h2 className="mb-3 text-neutralGray font-semibold">
                  {blog.title}
                </h2>
                <p className="text-textGray mb-4">{blog.excerpt}</p>
                <div className="flex items-center gap-8 justify-center">
                  <h2 className="text-brandPrimary flex gap-2 items-center hover:text-neutral-700">
                    Read More
                    <span className="cursor-pointer">
                      <FaArrowCircleRight />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
