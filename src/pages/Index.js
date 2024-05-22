import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./Hero";
import About from "./About";
import Questions from "./Questions";
import Types from "./Types";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Hero />
        <Subscribe />
        <Toaster />
        <About />
        <Questions />
        <Types />
        <Testimonials />
        <Blog />
        <Footer />
      </>
    </React.Fragment>
  );
}
