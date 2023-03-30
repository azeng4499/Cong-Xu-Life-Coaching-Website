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
              I grew up in the beautiful and richly historic city of Qingdao in
              China. A former colony of Germany, this city is now home to the
              famous Tsingtao beer. I came to the US as a graduate student and
              earned a master's in educational psychology. I love to discover
              people's inner selves. Work opportunities directed me toward a job
              as an elementary school teacher, but I did not find this to be my
              calling. I then went on to earn a master’s degree in business from
              the University of Maryland and worked in the corporate world. It
              did not take me long to discover that this, too, did not feed my
              soul. I kept searching within to understand my true passion.
              <br />
              <br />
              <p>
                By a stroke of luck, I talked to an ontological life coach to
                learn more about myself. I enjoyed the process of discovering my
                subconscious self and was amazed by what I saw–a layer of myself
                that had always been there but that I had never seen. This
                revelation brought me back full circle to my love of discovering
                people's inner selves. I knew then that I had found a true path.
                I was inspired to become a coach myself! After graduating from
                the International Coaching Federation (ICF) program, and
                certificated as a ICF ACC coach, I started my own practice and
                have found it a very rewarding experience.{" "}
              </p>
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
  width: 214px;
  position: relative;

  @media screen and (max-width: 375px) {
    height: 295px;
    width: 197px;
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
  font-size: 0.9rem;
  // text-align: center;

  @media screen and (max-width: 415px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.65rem;
  }
`;

const Portrait = styled.img`
  height: 300px;
  width: 210px;
  border-radius: 10px;
  position: absolute;
  border: solid;
  border-width: 3px;
  border-color: white;
  filter: grayscale(100);

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 190px;
  }

  &:hover {
    filter: grayscale(0);
  }
`;

const PortraitBorder = styled.div`
  height: 300px;
  width: 210px;
  border-radius: 10px;
  border: solid;
  border-width: 3px;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (max-width: 375px) {
    height: 275px;
    width: 190px;
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
