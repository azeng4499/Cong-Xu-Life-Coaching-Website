import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Subscribe = () => {
  const [type, setType] = useState("");

  const notify = () => toast("Here is your toast.");

  const sendEmail = async (email) => {
    console.log(email);
    await addDoc(collection(db, "emails"), {
      email: email,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  return (
    <section
      className="relative py-20 2xl:py-40 overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <img
        className="hidden lg:block absolute left-0 top-0 -ml-96 mt-80"
        src="zospace-assets/lines/circle.svg"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h6 className="mt-10 mb-14 text-6xl lg:text-7xl font-bold font-heading text-white">
            Join the newsletter!
          </h6>
          <p className="mb-14 max-w-xl mx-auto text-xl text-gray-200">
            Subscribe to get a{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              free life coaching resource!
            </span>{" "}
            Unlock Your True Potential with Our Expert-Curated Content and Tools
          </p>
          <div className="max-w-xl mb-8 mx-auto sm:flex sm:items-center sm:bg-white sm:rounded-full">
            <span className="hidden sm:inline-block pl-6 lg:pl-10">
              <svg
                width={37}
                height={37}
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="9.5"
                  fill="#1F40FF"
                  fillOpacity="0.15"
                />
                <circle
                  cx="18.5"
                  cy="18.5"
                  r="18.5"
                  fill="#1F40FF"
                  fillOpacity="0.06"
                />
                <circle cx="18.5" cy="18.5" r="2.5" fill="#282C36" />
              </svg>
            </span>
            <input
              className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none"
              type="email"
              placeholder="Drop your Email"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
            <button
              className="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold rounded-full transition duration-200"
              style={{ backgroundColor: "#f27457" }}
              onClick={() => {
                if (isValidEmail(type)) {
                  sendEmail(type);
                  toast.success("You are subscribed!", {
                    style: {
                      fontSize: "1.5rem",
                      padding: "2px 10px",
                    },
                  });
                } else {
                  toast.error("Invalid Email.", {
                    style: {
                      fontSize: "1.5rem",
                      padding: "2px 10px",
                    },
                  });
                }
                setType("");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
