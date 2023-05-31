import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TypesOfCoaching from "./components/types-of-coaching";
import AboutMe from "./components/about-me";
import Testimony from "./components/testimony";
import AboutCoaching from "./components/about-coaching";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookNow from "./components/book-now";
import EmailAgg from "./components/email-agg";
import News from "./components/news";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Sidebar />
                <Hero />
                <EmailAgg />
                <AboutMe />
                <AboutCoaching />
                <TypesOfCoaching />
                <Testimony />
                <News />
                <Footer />
              </>
            }
            exact
          />
          <Route path="/book-now" element={<BookNow />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
