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
                <AboutMe />
                <AboutCoaching />
                <TypesOfCoaching />
                <Testimony />
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
