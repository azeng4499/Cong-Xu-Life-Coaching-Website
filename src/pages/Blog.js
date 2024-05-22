import React, { useState, useEffect } from "react";
import { LinkedInEmbed } from "react-social-media-embed";
import { db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Blog = () => {
  
  const getData = async () => {
    const docRef = doc(db, "website-db", "blog");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    setUrls(data["linked-in-posts"]);
  };

  useEffect(() => {
    getData();
  }, []);

  const [urls, setUrls] = useState([null, null, null, null]);

  return (
    <section
      className="py-20 2xl:py-40  overflow-hidden"
      style={{ backgroundColor: "#fbf1db" }}
    >
      <div class="news"></div>
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <span className="text-lg text-blue-500 font-bold">What's new?</span>
          <h2 className="mt-8 text-6xl lg:text-7xl font-bold font-heading">
            Latest blog
          </h2>
        </div>
        <div className="flex flex-wrap -mx-5">
          <div className="w-full md:w-1/2 lg:w-1/4 p-5">
            <LinkedInEmbed url={urls[0]} className="embed" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5">
            <LinkedInEmbed url={urls[1]} className="embed" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5">
            <LinkedInEmbed url={urls[2]} className="embed" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-5">
            <LinkedInEmbed url={urls[3]} className="embed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
