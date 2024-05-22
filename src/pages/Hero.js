import React, { useState } from "react";
import Cong from "../assets/img/cong-hero-3.png";
import Logo from "../assets/img/cxclogo.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link as LinkS } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const router = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="pb-20" style={{ backgroundColor: "#253658" }}>
      <nav className="relative">
        <div className="flex py-8 px-4 lg:px-8 justify-between items-center">
          <a className="text-2xl text-white font-bold">
            <img src={Logo} alt="" width="auto" style={{ height: "48px" }} />
          </a>
          <div
            className="lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <button className="p-2 navbar-burger">
              <svg
                className="w-10 h-3"
                width={39}
                height={13}
                viewBox="0 0 39 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={39} height={2} rx={1} fill="#C4C4C4" />
                <rect
                  x={19}
                  y={11}
                  width={20}
                  height={2}
                  rx={1}
                  fill="#C4C4C4"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <ul
              className="flex items-center text-white space-x-10"
              style={{ cursor: "pointer" }}
            >
              <li>
                <LinkS
                  className="text-white font-bold text-lg"
                  to="about"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                >
                  About
                </LinkS>
              </li>
              <span>
                <svg
                  width={5}
                  height={5}
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                </svg>
              </span>
              <li>
                <LinkS
                  className="text-white font-bold text-lg"
                  to="faq"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                >
                  FAQ
                </LinkS>
              </li>
              <span>
                <svg
                  width={5}
                  height={5}
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                </svg>
              </span>
              <li>
                <LinkS
                  className="text-white font-bold text-lg"
                  to="types"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                >
                  Types
                </LinkS>
              </li>
              <span>
                <svg
                  width={5}
                  height={5}
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                </svg>
              </span>
              <li>
                <LinkS
                  className="text-white font-bold text-lg"
                  to="news"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                >
                  News
                </LinkS>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a
              className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
              href="book-now"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
      <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <span className="text-lg font-bold text-blue-400">
              Hello there!
            </span>
            <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
              Unleash Potential. Embrace Change. Live Fully.
            </h2>
            <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
              Take the Leap: Start Your Transformation Today!
            </p>
            <LinkS
              className="text-white font-bold text-lg inline-block px-12 py-5 text-lg text-white font-bold rounded-full transition duration-200 hero-about-me-button"
              style={{ backgroundColor: "#f27457", cursor: "pointer" }}
              to="about"
              duration={500}
              spy={true}
              offset={-100}
              exact="true"
              smooth={true}
            >
              Learn about me
            </LinkS>
            <button
              className="text-white font-bold text-lg inline-block px-12 py-5 text-lg text-white font-bold rounded-full transition duration-200 flex lg:hidden"
              style={{ backgroundColor: "#f27457", cursor: "pointer" }}
              onClick={() => {
                router("/book-now");
              }}
            >
              Book Now
            </button>
          </div>
          <div
            className="w-full lg:w-1/2 px-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="w-full"
              src={Cong}
              alt=""
              style={{ maxWidth: "575px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              paddingRight: "20px",
            }}
          >
            <IoCloseSharp
              size="2em"
              onClick={() => {
                setShowMenu(false);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <LinkS
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  to="about"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  About
                </LinkS>
              </li>
              <li className="mb-1 px-10">
                <LinkS
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  to="faq"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  FAQ
                </LinkS>
              </li>
              <li className="mb-1 px-10">
                <LinkS
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  to="types"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Types
                </LinkS>
              </li>
              <li className="mb-1 px-10">
                <LinkS
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  to="news"
                  duration={500}
                  spy={true}
                  offset={-100}
                  exact="true"
                  smooth={true}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  News
                </LinkS>
              </li>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <div className="pt-6">
              <a
                className="block py-4 px-12 text-white text-center font-bold rounded-full transition duration-200"
                style={{ backgroundColor: "#f27457" }}
                href="book-now"
              >
                Book Now
              </a>
            </div>
            <p className="mt-6 mb-4 text-lg text-center">
              <span>2023 Cong Xu Coaching. All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
