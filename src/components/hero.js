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
            <HighlightedWord>{Translate("Break")}</HighlightedWord>{" "}
            {Translate("Free.")}
          </HeroH2>
          <SignatureSvg
            width="289"
            height="99"
            viewBox="0 0 1800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SvgPath d="M690 736C574.641 690.128 501.634 666.141 515 593.5C565.452 434.223 604.344 389.049 655.263 369.815C672.446 363.325 690.999 359.789 711.828 355.819L713.5 355.5C821.647 345.487 784.421 363.538 659.027 478.829L660 507L664.991 545.095L690 736Z M279.5 80.5L131 216.5C204.866 235.871 229.003 252.889 247.5 292C174.552 374.368 118.781 415.264 14.5 486.5L97.5 449.5L220 694.5C402.417 235.545 481.254 116.155 601 26C638.241 24.7953 647.123 56.9459 647.5 145L660 507L690 736C574.641 690.128 501.634 666.141 515 593.5C582.932 379.039 629.907 371.442 713.5 355.5C836.748 344.089 771.191 369.126 601.5 533C568.644 564.892 684.56 539.773 772.5 533M1107 131.5L1244.5 96L1167.04 329M1120.5 469L1167.04 329M1167.04 329L1213.5 355.5L1244.5 766.5M1406.5 145L1440 183M1582 96L1440 309.5L1582 273.5L1440 454.34M1353.5 564.5L1440 454.34M1440 454.34C1520.92 612.995 1602.46 623.601 1770.5 593.5L1722 486.5M1611 454.34L1770.5 402.5L1844 449.5" />
          </SignatureSvg>
        </HeroTextGroup>
      </HeroGroup>
    </HeroContainer>
  );
};

/*

<svg width="1858" height="775" viewBox="0 0 1858 775" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M690 736C574.641 690.128 501.634 666.141 515 593.5C565.452 434.223 604.344 389.049 655.263 369.815C672.446 363.325 690.999 359.789 711.828 355.819L713.5 355.5C821.647 345.487 784.421 363.538 659.027 478.829L660 507L664.991 545.095L690 736Z" fill="#D9D9D9"/>
<path d="M279.5 80.5L131 216.5C204.866 235.871 229.003 252.889 247.5 292C174.552 374.368 118.781 415.264 14.5 486.5L97.5 449.5L220 694.5C402.417 235.545 481.254 116.155 601 26C638.241 24.7953 647.123 56.9459 647.5 145L660 507L690 736C574.641 690.128 501.634 666.141 515 593.5C582.932 379.039 629.907 371.442 713.5 355.5C836.748 344.089 771.191 369.126 601.5 533C568.644 564.892 684.56 539.773 772.5 533M1107 131.5L1244.5 96L1167.04 329M1120.5 469L1167.04 329M1167.04 329L1213.5 355.5L1244.5 766.5M1406.5 145L1440 183M1582 96L1440 309.5L1582 273.5L1440 454.34M1353.5 564.5L1440 454.34M1440 454.34C1520.92 612.995 1602.46 623.601 1770.5 593.5L1722 486.5M1611 454.34L1770.5 402.5L1844 449.5" stroke="black" stroke-width="50"/>
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
  stroke-dasharray: 5000;
  stroke-dashoffset: 6000;
  stroke: ${Colors.white};
  stroke-width: 50;
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
