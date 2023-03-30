import React, { useState } from "react";
import { useCalendlyEventListener, PopupModal } from "react-calendly";
import { Colors } from "../utils/colors";
import HappyFriends from "../images/happy-friends.jpg";
import "./book-now.css";
import Confetti from "react-confetti";

const BookNow = () => {
  const [scheduled, setScheduled] = useState(false);

  useCalendlyEventListener({
    onEventScheduled: () => setScheduled(true),
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.darkBlue,
      }}
    >
      <img
        src={HappyFriends}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          filter: "grayscale(1)",
          opacity: "0.2",
        }}
      />
      <PopupModal
        url="https://calendly.com/cx-coaching/meetingcong"
        open={!scheduled}
        rootElement={document.getElementById("root")}
      />
      <Confetti
        style={{ position: "absolute", width: "100vw", height: "100vh" }}
        numberOfPieces="1000"
        recycle={false}
        run={scheduled}
      />
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          padding: "50px",
          flexDirection: "column",
          display: scheduled ? "flex" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0px",
            flexDirection: "column",
          }}
        >
          <div className="thank-you-header" style={{ color: Colors.orange }}>
            Thank You!
          </div>
          <div className="thank-you-subheader">
            I look forward to speaking with you soon
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/GZ1Q3gaV3Wo"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          className="iframe"
        />
      </div>
    </div>
  );
};

export default BookNow;
