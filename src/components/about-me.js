import React, { useEffect } from "react";
import styled from "styled-components";
import PortraitImg from "../images/portrait.jpg";
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
              <span style={{ fontSize: "2em", color: Colors.black }}>
                <span style={{ color: Colors.orange }}>
                  {Translate("Hello!")}
                </span>{" "}
                {Translate("My name is Cong")}
              </span>{" "}
              I am an immigrant from Qingdao, China, a beautiful city I love. It
              has a rich history, including once being a colony of Germany and
              now the home of the famous Tsingtao beer. I came to the US as a
              graduate student to study Educational Psychology. Upon graduating,
              I became an elementary school teacher, but I was unhappy with that
              job. After struggling and talking to many people, I thought I
              would be happier with a business degree. I went back to school to
              get a master’s in accounting and followed the typical career path
              to work in corporate America, yet, I was still not happy. Finally, I 
              talked to a life coach to learn more about myself. I
              discovered that I enjoyed the process and decided I wanted to be a
              life coach too! After graduating from the ICF coaching program, I have
              begun to coach other people. Working as a coach, I can finally
              enjoy my work and be the person I want to be.
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
  color: ${Colors.orange};
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
  color: ${Colors.darkBlue};
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
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.15rem;
  // text-align: center;

  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
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
  filter: grayscale(100);

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 275px;
  }

  &:hover {
    filter: grayscale(0);
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
  background: ${Colors.tan};
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
