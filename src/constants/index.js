import icon1 from "/src/assets/icons1.png";
import icon2 from "/src/assets/icons2.png";
import icon3 from "/src/assets/icons3.png";
import image1 from "/src/assets/image18.svg";
import image2 from "/src/assets/image19.svg";
import image3 from "/src/assets/image20.svg";

export const navLinks = [
  { link: "Home", path: "home" },
  { link: "Services", path: "service" },
  { link: "Products", path: "product" },
  { link: "About", path: "about" },
  { link: "Blogs", path: "blog" },
  { link: "Connect", path: "connect" },
];

export const services = [
  {
    id: 1,
    title: "Coding Bootcamps",
    description:
      "Unlock the world of coding through our intensive bootcamps. Whether you're a beginner or an experienced developer, our programs cater to all skill levels. Dive into hands-on projects, receive mentorship, and accelerate your coding journey.",
    image: icon1,
  },
  {
    id: 2,
    title: "Web Development Courses",
    description:
      "Build dynamic and responsive websites with our specialized web development courses. Learn front-end and back-end technologies, and acquire the skills needed to create modern, user-friendly web applications.",
    image: icon2,
  },
  {
    id: 3,
    title: "Data Science Workshops",
    description:
      "Explore the world of data science through our comprehensive workshops. Master data analysis, machine learning, and statistical modeling. Turn raw data into actionable insights and make informed business decisions.",
    image: icon3,
  },
];

export const blogs = [
  {
    id: 1,
    title: "The Art of Web Development",
    excerpt: "Learn the essentials ",
    image: image1,
  },
  {
    id: 2,
    title: "Mastering React",
    excerpt: "Unlock the full potential of React.js ",
    image: image2,
  },
  {
    id: 3,
    title: "The Future of Programming",
    excerpt: "Stay ahead of the curve ",
    image: image3,
  },
];
