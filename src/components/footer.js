import React from "react";
import styled from "styled-components";
import { RiCopyrightLine } from "react-icons/ri";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { Colors } from "../utils/colors";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Email at: hello@cxucoaching.com</FooterText>
      <FooterText>
        <RiCopyrightLine style={{ marginRight: "5px" }} /> 2022 Cong Xu Coaching
      </FooterText>
      <FooterText>
        <div>
          Follow on:
          <a
            href="https://www.linkedin.com/in/congx/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <BsLinkedin style={{ margin: "0 8px" }} />
          </a>
          <a target="_blank" rel="noreferrer" style={{ color: "white" }}>
            <BsFacebook style={{ margin: "0 8px" }} />
          </a>
        </div>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  height: 100px;
  background: ${Colors.darkBlue};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 130px;
    align-items: center;
    justify-content: center;
  }
`;

const FooterText = styled.div`
  font-size: 0.75rem;
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
