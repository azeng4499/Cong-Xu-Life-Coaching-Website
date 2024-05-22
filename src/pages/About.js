import React, { useEffect, useState } from "react";
import QingDao from "../assets/img/qingdao.jpg";
import Portrait from "../assets/img/portrait.jpg";
import { db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const About = () => {
  const getData = async () => {
    const docRef = doc(db, "website-db", "about-me");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    setDescription({
      para1: data["description-para-1"],
      para2: data["description-para-2"],
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [description, setDescription] = useState({ para1: null, para2: null });

  return (
    <section
      className="py-20 2xl:py-40 overflow-hidden"
      style={{ backgroundColor: "#fbf1db" }}
    >
      <div class="about"></div>
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="mb-14 text-6xl lg:text-7xl font-bold font-heading"
            style={{ color: "#253658" }}
          >
            About me
          </h2>
        </div>
        <div className="relative h-96 mb-20">
          <img className="w-full h-full object-cover" src={QingDao} alt="" />
          <img
            className="absolute bottom-0 left-0 ml-4 lg:ml-12 -mb-16 lg:-mb-24 w-32 lg:w-48 h-40 lg:h-60 object-cover"
            src={Portrait}
            alt=""
            style={{ border: "solid white 3px" }}
          />
        </div>
        <div className="max-w-xl mx-auto">
          <p className="mb-6 text-left text-xl text-black">
            {description.para1}
          </p>
          <p className="mb-6 text-left text-xl text-black">
            {description.para2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
