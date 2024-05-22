import React, { useState } from "react";
import Testimony1 from "../assets/img/Leigh.png";
import Testimony2 from "../assets/img/Cat.png";
import Testimony3 from "../assets/img/Anna.jpg";
import Testimony4 from "../assets/img/Babaraba.jpeg";
import Testimony5 from "../assets/img/frank.jpeg";
import Testimony6 from "../assets/img/xiaoli.jpeg";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const Profiles = [
    Testimony1,
    Testimony2,
    Testimony3,
    Testimony4,
    Testimony5,
    Testimony6,
  ];

  const Text = [
    "The work I did with Cong lifted what felt like a huge weight of concern and wasted energy from my shoulders. Cong's deep listening and her reflecting back to me what I had shared gave me the opportunity to see my situation from a different lens in my mind. The clarity of her reflection allowed me to release the unnecessary burden I had placed on myself, to accept a situation without having to change it. I feel so much happier and at peace with myself and others because of my time with Cong......Cong is a blessing!",
    "Through her excellent coaching skills, Cong gently led me to an inner path that has always been there, but that somehow I had lost sight of. That's the amazing thing–we all have subconscious beliefs that can hold us back from becoming the best person we can possibly be. Cong's coaching let me brush the cobwebs from my own mirror to see the hidden but ever-present and true potential within myself that is joyfully within my reach.",
    "Working with Cong has been a delightful enlightening experience. She has helped me become more aware of my own internal processes, clarify my overall wants and goals, and provided a sense of support and accountability.",
    "I coached with Cong, who taught me how to have a mirror ( of course not the mirror hanging on the wall!). By following her questions, I could listen to myself and talk to myself, and Cong did a great job letting me reflect on what came from my true heart and directing me on the path along the way. I strongly recommend you take a coaching.",
    "I was not into the idea of having a coach while starting my business. However, after just one session with Cong, I found myself with a renewed sense of focus. Cong has a talent for listening and allowing you to find your own path. My sessions with her helped me step outside my comfort zone and find the courage to face challenges by setting priorities and deadlines. I am grateful to her because she has taught me how to be accountable to myself.",
    "Life coaching helped me understand myself better, overcome obstacles and maximize my strengths in my personal and professional lives.",
  ];

  const Header = [
    "I feel so much happier",
    "Excellent coaching skills",
    "Delightful enlightening experience",
    "Strongly recommend",
    "Step outside my comfort zone",
    "Understand myself better",
  ];

  const Name = [
    "Leigh S.",
    "Caterina M.",
    "Anna J.",
    "Barbara W.",
    "Frank P.",
    "Xiao L.",
  ];

  return (
    <section
      className="relative py-20 2xl:py-40 overflow-hidden"
      style={{ backgroundColor: "#253658" }}
    >
      <img
        className="absolute bottom-0 left-0 h-96"
        src="zospace-assets/lines/circle-gray-half.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 left-0 h-112 -mb-64"
        src="zospace-assets/lines/circle.svg"
        alt=""
      />
      <img
        className="hidden lg:block absolute top-0 right-0 h-128 -mr-40 -mt-40"
        src="zospace-assets/lines/circle.svg"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/6 px-4 text-right">
            <button
              className="hidden lg:inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full"
              onClick={() => {
                if (index == 0) {
                  setIndex(5);
                } else {
                  setIndex(index - 1);
                }
              }}
            >
              <svg
                width={7}
                height={14}
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="w-full lg:w-4/6 px-4">
            <div className="relative text-center mb-14">
              <img
                className="absolute top-0 right-0 mt-28"
                src="zospace-assets/images/quote-gray.svg"
                alt=""
              />
              <div className="relative">
                <span className="text-lg text-blue-400 font-bold">
                  Testimonials
                </span>
                <h2 className="mt-24 mb-16 text-5xl font-bold font-heading text-white">
                  {Header[index]}
                </h2>
              </div>
              <div
                className="max-w-xl mx-auto"
                style={{
                  minHeight: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                }}
              >
                <p className="mb-8 text-lg text-gray-200">{Text[index]}</p>
              </div>
            </div>
            <div className="flex -mx-4 items-center justify-center">
              <div className="px-4">
                <img
                  className="rounded-full"
                  src={Profiles[index]}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="px-4">
                <div>
                  <h3 className="mb-1 text-2xl text-white font-bold">
                    {Name[index]}
                  </h3>
                  {/* <p className="text-white">Google</p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:hidden text-center mb-10"
            style={{
              // backgroundColor: "red",
              width: "100vw",
              marginTop: "50px",
            }}
          >
            <button
              className="inline-flex items-center justify-center w-14 h-14 mx-1 bg-blue-500 hover:bg-blue-600 rounded-full"
              onClick={() => {
                if (index == 0) {
                  setIndex(5);
                } else {
                  setIndex(index - 1);
                }
              }}
            >
              <svg
                width={7}
                height={14}
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              className="inline-flex items-center justify-center w-14 h-14 mx-1 bg-blue-500 hover:bg-blue-600 rounded-full"
              onClick={() => {
                if (index == 5) {
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }}
            >
              <svg
                width={7}
                height={13}
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="w-full lg:w-1/6 px-4">
            <button
              className="hidden lg:inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full"
              onClick={() => {
                if (index == 5) {
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }}
            >
              <svg
                width={7}
                height={13}
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
