import React from "react";
import styled from "styled-components";
import "./about-coaching.css";
import Cafe from "../images/cafe.jpg";
import Crowd from "../images/crowd.jpg";
import CrossWalk from "../images/crosswalk.jpg";
import Family from "../images/family.jpg";
import { Colors } from "../utils/colors";
const AboutCoaching = () => {
  return (
    <div>
      <svg
        height="80px"
        width="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill={Colors["tan"]}
        style={{ background: Colors["blue"], display: "block" }}
      >
        <path d="M0 0 L100 0 L100 100 Z" />
      </svg>
      <Page>
        <PageWrapper
          data-aos="fade-up"
          data-aos-once="true"
          className="what-is-coaching"
        >
          <TitleWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Header>What is Coaching?</Header>
              <Title>Questions You Might Have</Title>
            </div>
          </TitleWrapper>
          <CoachingWrapper>
            <div style={{ display: "grid" }}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardImg src={Crowd} />
                    <QuestionText>What Is Coaching?</QuestionText>
                  </div>
                  <div className="flip-card-back">
                    <AnswerText>
                      Coaching is partnering with clients in a thought-provoking
                      and creative process that inspires them to maximize their
                      personal and professional potential. The process of
                      coaching often unlocks previously untapped sources of
                      imagination, productivity and leadership. Coaching is all
                      about identifying and closing the gap between where you
                      currently are and where you want to be. I act as a mirror
                      reflecting patterns of thinking, doing, and being that are
                      keeping you stuck or holding you back from stepping into
                      this future place.⁠
                    </AnswerText>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardImg src={Cafe} />
                    <QuestionText>Question 3</QuestionText>
                  </div>
                  <div className="flip-card-back">
                    <Text>Answer 3</Text>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "grid" }}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardImg src={CrossWalk} />
                    <Text>Question 2</Text>
                  </div>
                  <div className="flip-card-back">
                    <Text>Answer 2</Text>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardImg src={Family} />
                    <Text>Question 4</Text>
                  </div>
                  <div className="flip-card-back">
                    <Text>Answer 4</Text>
                  </div>
                </div>
              </div>
            </div>
          </CoachingWrapper>
        </PageWrapper>
      </Page>
    </div>
  );
};

export default AboutCoaching;

const Page = styled.div`
  background: ${Colors["blue"]};
  height: 675px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    height: 1025px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 775px) {
    justify-content: center;
  }
`;

const CardImg = styled.img`
  height: 175px;
  width: 1000px;
  object-fit: cover;
  filter: grayscale(100%);
  opacity: 0.3;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
`;

const Title = styled.div`
  color: ${Colors["orange"]};
  font-family: "Bebas Neue", cursive;
  font-size: 4rem;
  margin: 0px 0px 50px 0px;
  border-bottom: solid;
  border-width: 3px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 550px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 415px) {
    font-size: 2.3rem;
  }
`;

const Header = styled.div`
  color: ${Colors["white"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const CoachingWrapper = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    display: grid;
    width: fit-content;
  }
`;

const QuestionText = styled.div`
  color: ${Colors["orange"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 2.5rem;
  position: absolute;
`;

const AnswerText = styled.div`
  color: ${Colors["white"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 0.75rem;
`;

const Text = styled.div`
  color: ${Colors["white"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
  position: absolute;
`;
