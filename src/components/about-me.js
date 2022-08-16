import React, { useEffect } from "react";
import styled from "styled-components";
import PortraitImg from "../images/headshot-new Cropped.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Translate } from "../utils/translate";
import { Colors } from "../utils/colors";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Page>
      <div
        style={{ display: "grid" }}
        data-aos="fade-up"
        data-aos-once="true"
        className="about-me"
      >
        <TitleWrapper>
          <HeaderWrapper>
            <Header>About Me</Header>
            <Title>A Brief Introduction</Title>
          </HeaderWrapper>
        </TitleWrapper>
        <IntroWrapper data-aos="fade-up" data-aos-once="true">
          <IntroContainer>
            <IntroText>
              <span style={{ fontSize: "2em", color: Colors["black"] }}>
                <span style={{ color: Colors["orange"] }}>
                  {Translate("Hello!")}
                </span>{" "}
                {Translate("My name is Cong")}
              </span>{" "}
              and I enjoy creating things that live on the internet. My interest
              in web development started back in 2012 when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom
              reblog button taught me a lot about HTML & CSS! Fast-forward to
              today, and I’ve had the privilege of working at an advertising
              agency, a start-up, a huge corporation, and a student-led design
              studio. My main focus these days is building accessible, inclusive
              products and digital experiences at Upstatement for a variety of
              clients. I also recently launched a course that covers everything
              you need to build a web app with the Spotify API using Node &
              React. Here are a few technologies I’ve been.
            </IntroText>
          </IntroContainer>
          <PictureContainer data-aos="fade-up" data-aos-once="true">
            <Portrait src={PortraitImg} />
            <PortraitBorder />
          </PictureContainer>
        </IntroWrapper>
      </div>
    </Page>
  );
};

export default AboutMe;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 775px) {
    justify-content: center;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 775px) {
    align-items: center;
  }
`;

const PictureContainer = styled.div`
  height: 320px;
  width: 320px;
  position: relative;

  @media screen and (max-width: 375px) {
    height: 295px;
    width: 295px;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: fit-content;
  height: fit-content;
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

  @media screen and (max-width: 375px) {
    font-size: 2.5rem;
  }
`;

const Header = styled.div`
  color: ${Colors["darkBlue"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const IntroContainer = styled.div`
  max-width: 800px;
  margin-right: 40px;

  @media screen and (max-width: 1300px) {
    margin-right: 0px;
    margin-bottom: 50px;
    max-width: 600px;
  }

  @media screen and (max-width: 775px) {
    max-width: 500px;
  }

  @media screen and (max-width: 550px) {
    max-width: 360px;
  }

  @media screen and (max-width: 415px) {
    max-width: 300px;
  }

  @media screen and (max-width: 375px) {
    max-width: 250px;
  }
`;

const IntroText = styled.div`
  color: ${Colors["darkBlue"]};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.3rem;
  // text-align: center;

  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

const Portrait = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  position: absolute;
  border: solid;
  border-width: 3px;
  border-color: white;

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 275px;
  }

  &:hover {
    filter: grayscale(100);
  }
`;

const PortraitBorder = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  border: solid;
  border-width: 3px;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 275px;
  }
`;

const Page = styled.div`
  background: ${Colors["tan"]};
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    height: 1050px;
  }

  @media screen and (max-width: 775px) {
    height: 1125px;
  }

  @media screen and (max-width: 550px) {
    height: 1325px;
  }

  @media screen and (max-width: 415px) {
    height: 1150px;
  }

  @media screen and (max-width: 375px) {
    height: 1075px;
  }
`;
