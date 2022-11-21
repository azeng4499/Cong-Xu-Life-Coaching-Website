import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Bg from "../images/congxuwebsitebackground.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Colors } from "../utils/colors";
import { Translate } from "../utils/translate";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <HeroContainer>
      <HeroBg src={Bg} />
      <HeroGroup>
        <HeroTextGroup>
          <HeroH1 data-aos="fade">{Translate("DREAM.")}</HeroH1>
          <HeroH1 data-aos="fade">{Translate("CONQUER.")}</HeroH1>
          <HeroH1 data-aos="fade">{Translate("EXCEL.")}</HeroH1>
          <HeroH2 data-aos="fade">
            <HighlightedWord>{Translate("Break")}</HighlightedWord>{" "}{Translate("Free.")}
          </HeroH2>
          <SignatureSvg
            width="289"
            height="99"
            viewBox="0 0 798 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SvgPath d="M279.5 80.5L131 216.5C204.866 235.871 229.003 252.889 247.5 292C174.552 374.368 118.781 415.264 14.5 486.5L97.5 449.5L220 694.5C402.417 235.545 481.254 116.155 601 26C638.241 24.7953 647.123 56.9459 647.5 145C693.746 232.832 693.944 262.961 690 313.5C598.68 408.966 560.717 464.324 514.5 566C565.911 677.168 611.442 712.966 704.5 758L690 534.5L729.5 518.5L647.5 486.5L729.5 362.5Z" />
          </SignatureSvg>
        </HeroTextGroup>
      </HeroGroup>
    </HeroContainer>
  );
};

/*

<svg width="798" height="800" viewBox="0 0 798 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M279.5 80.5L131 216.5C204.866 235.871 229.003 252.889 247.5 292C174.552 374.368 118.781 415.264 14.5 486.5L97.5 449.5L220 694.5C402.417 235.545 481.254 116.155 601 26C638.241 24.7953 647.123 56.9459 647.5 145C693.746 232.832 693.944 262.961 690 313.5C598.68 408.966 560.717 464.324 514.5 566C565.911 677.168 611.442 712.966 704.5 758L690 534.5L729.5 518.5L647.5 486.5L729.5 362.5" stroke="black" stroke-width="50"/>
</svg>


*/

export default Hero;

const HighlightedWord = styled.span`
  color: ${Colors.orange};
`;

const SignatureSvg = styled.svg`
  height: 150px;
  width: 400px;

  @media screen and (max-width: 450px) {
    height: 100px;
    width: 300px;
  }
`;

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const SvgPath = styled.path`
  stroke-dasharray: 1900;
  stroke-dashoffset: 2100;
  stroke: ${Colors.white};
  stroke-width: 4;
  animation: ${dash} 5s linear forwards;
`;

const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  //justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  max-height: 1000px;
`;

const HeroBg = styled.img`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
  object-position: 0px 40px;
  position: relative;

  max-height: 1100px;

  @media screen and (max-width: 1025px) {
    object-position: 10% 75%;
  }

  @media screen and (max-width: 775px) {
    object-position: 18% 75%;
  }
`;

const HeroGroup = styled.div`
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1025px) {
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 100px;
  }
`;

const HeroTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  margin-right: 15rem;

  @media screen and (max-width: 1575px) {
    margin-right: 3.5rem;
  }

  @media screen and (max-width: 700px) {
    margin-right: 0rem;
  }
`;

const HeroH1 = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 2.5rem;
  // z-index: 1;
  // height: fit-content;
  // background: yellow;
  margin-top: -10px;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
    color: ${Colors.white};
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    margin-top: -5px;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const HeroH2 = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 6rem;
  // z-index: 1;
  positon: absolute;
  margin: -20px 0px 0px -5px;
  // background: red;

  @media screen and (max-width: 1300px) {
    font-size: 5rem;
    color: ${Colors.white};
  }
  @media screen and (max-width: 450px) {
    font-size: 4rem;
    margin: -15px 0px 0px -5px;
  }

  @media screen and (max-width: 375px) {
    font-size: 3.5rem;
  }
`;
