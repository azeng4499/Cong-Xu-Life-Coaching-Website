import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Corporate from "../images/career-final.svg";
import Workshop from "../images/business-final.svg";
import Group from "../images/group.svg";
import OneOnOne from "../images/relationship-final.svg";
import { Colors } from "../utils/colors";
import "react-tippy/dist/tippy.css";
import "./types-of-coaching.css";
import { Translate } from "../utils/translate";

const TypesOfCoaching = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <svg
        height="80px"
        width="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill={Colors.blue}
        style={{ background: Colors.tan, display: "block" }}
      >
        <path d="M0 0 L100 0 L100 100 Z" />
      </svg>
      <Page className="types-of-coaching">
        <PageWrapper>
          <HeaderWrapper data-aos="fade-up" data-aos-once="true">
            <div>
              <Header>Types of Coaching</Header>
              <Title>How I Can Help</Title>
            </div>
          </HeaderWrapper>
          <BlobWrapper>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <img
                    src={OneOnOne}
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <Label
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    1 on 1
                  </Label>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <div className="no-scrollbar" style={{ overflow: "scroll" }}>
                    <p>Are you done with all the drama? </p>
                    <p>Are you dissatisfied with your work-life balance? </p>
                    <p>Are you tired of having dreams but no actions? </p>
                    <p>Do you think you can achieve more?</p>
                    <p>Are you struggling to define what you really want?</p>
                    <p>Have you lost your fire and drive?</p>
                    <p>Do you feel trapped?</p>
                    <br />
                    <p>6-12 months of 1:1 coaching can help you:</p>
                    <br />
                    <ul style={{ marginLeft: "20px" }}>
                      <li>Develop a greater sense of self-awareness</li>
                      <li>
                        Understand the importance of setting and achieving goals
                      </li>
                      <li>Find clarity, direction, and motivation</li>
                      <li>Build more confidence and self-esteem</li>
                      <li>Improve communication and relationships</li>
                      <li>Create a plan for taking action.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <img
                    src={Group}
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <Label
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    Group
                  </Label>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <div className="no-scrollbar" style={{ overflow: "scroll" }}>
                    <p>
                      For those who have always wanted to create the life of
                      their dreams but feel like there's never enough time or
                      support, this is the place for you. Take a moment to pause
                      with the support of like-minded individuals and reflect on
                      the "why" (the mindset) before hurrying to action.
                    </p>
                    <p>
                      Do you want to respond to life's challenges with a
                      positive mindset rather than a negative one? Our 7-week
                      mental fitness program, in partnership with Stanford
                      Lecturer Shirzad Chamine, includes weekly group coaching
                      sessions to support you as you build powerful new muscles
                      in your brain through daily practice.
                    </p>
                    <br />
                    <p>Program Details:</p>
                    <br />
                    <ul style={{ marginLeft: "20px" }}>
                      <li>6 weeks duration + 1 week for feedback</li>
                      <li>
                        Watch a 1-hour weekly video (on the weekend or Monday)
                      </li>
                      <li>15 minutes per day of practice on the app</li>
                      <li>
                        Read 8 chapters of the Positive Intelligence book{" "}
                      </li>
                    </ul>
                    <br />
                    <p>
                      In addition to the above, every participant will be
                      invited to a weekly group coaching session with pod
                      members (3-5 individuals) to share and hold each other
                      accountable. Research indicates a 500% increased
                      likelihood of establishing positive new habits when
                      supported by accountability partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <img
                    src={Corporate}
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <Label
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    Corporate
                  </Label>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <div className="no-scrollbar" style={{ overflow: "scroll" }}>
                    <p>
                      “Leadership is not about titles, positions, or flowcharts.
                      It is about one life influencing another.” - John C.
                      Maxwell
                    </p>
                    <br />
                    <p>
                      Our executive and corporate coaching program provides a
                      confidential and supportive environment for leaders of
                      organizations to develop their skills, identify areas for
                      improvement, and gain greater self-awareness and clarity
                      about their goals. We focus on helping executives and the
                      organizations they lead to set and reach goals, enhance
                      their capabilities, increase their effectiveness, and
                      develop their emotional intelligence. Our coaching program
                      also helps executives manage transitions, improve
                      communication, and make better decisions. We work on
                      improving leadership skills, communication abilities, and
                      the ability to prioritize roles and responsibilities,
                      which will help you accomplish reaching new goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <img
                    src={Workshop}
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <Label
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    Workshop
                  </Label>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: Colors.darkBlue }}
                >
                  <p>
                    Our workshops are designed for organizations and
                    corporations that are looking for personal development,
                    leadership training, and a shared understanding and
                    alignment around common goals. We understand the importance
                    of fostering collaboration and positive communication among
                    team members.
                  </p>
                </div>
              </div>
            </div>
          </BlobWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "50px",
              gap: "10px",
            }}
            className="next-step"
          >
            <Header>Ready to take the next step?</Header>
            <Button
              onClick={() => openInNewTab("http://localhost:3000/book-now")}
            >
              <ButtonText> {Translate("Book Now")}</ButtonText>
            </Button>
          </div>
        </PageWrapper>
      </Page>
    </>
  );
};

export default TypesOfCoaching;

const PageWrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 60px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 775px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BlobContainer = styled.div`
  height: 350px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkBlue};
  border-radius: 15px;
`;

const BlobImage = styled.img`
  height: 200px;
  width: 200px;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 2.2rem;
  color: ${Colors.white};
  width: fit-content;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const BlobWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media screen and (max-width: 775px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const Title = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${Colors.orange};
  font-family: "Bebas Neue", cursive;
  font-size: 4rem;
  margin: 0px 0px 75px 0px;
  display: flex;
  align-items: center;
  border-bottom: solid;
  border-width: 3px;

  @media screen and (max-width: 775px) {
    margin: 0px 0px 40px 0px;
  }

  @media screen and (max-width: 375px) {
    font-size: 3.5rem;
  }
`;

const Page = styled.div`
  // height: 650px;
  background: ${Colors.tan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  // @media screen and (max-width: 1300px) {
  //   height: 1125px;
  // }

  // @media screen and (max-width: 775px) {
  //   height: 1850px;
  // }
`;

export const Button = styled.button`
  //d1ae95
  //F05786
  background: ${Colors.orange};
  height: 3rem;
  width: 8rem;
  border-radius: 30px;
  border: solid;
  border-color: ${Colors.white};
  border-width: 3px;

  // @media screen and (max-width: 1300px) {
  //   display: none;
  // }
`;

export const ButtonText = styled.div`
  font-size: 1.2rem;
  font-family: "Kdam Thmor Pro", sans-serif;
  color: ${Colors.white};
`;
