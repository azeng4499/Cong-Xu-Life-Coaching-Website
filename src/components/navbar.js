import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Logo from "../images/congxulogo.png";
import { animateScroll } from "react-scroll";
import { PopupModal } from "react-calendly";
import { useSelector, useDispatch } from "react-redux";
import { setChinese, setNavOpen } from "../store/actions";
import { Translate } from "../utils/translate";
import { Colors } from "../utils/colors";

const Navbar = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const chinese = useSelector((state) => state.isChinese);
  const navOpen = useSelector((state) => state.navOpen);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Header>
        <HeaderText>Follow on </HeaderText>
        <a
          href="https://www.linkedin.com/in/congx/"
          target="_blank"
          rel="noreferrer"
        >
          <HeaderText>
            <BsLinkedin />
          </HeaderText>
        </a>
        <a
          href="https://www.facebook.com/amy.xu.1675"
          target="_blank"
          rel="noreferrer"
        >
          <HeaderText>
            <BsFacebook />
          </HeaderText>
        </a>
        <HeaderText>||</HeaderText>
        <HeaderText
          onClick={() => dispatch(setChinese(!chinese))}
          style={{ cursor: "pointer" }}
        >
          {chinese ? "English" : "中文"}
        </HeaderText>
      </Header>
      <NavContainer>
        <LogoImg src={Logo} onClick={() => animateScroll.scrollToTop()} />
        <MenuIcon>
          <FaBars
            size={"1.5em"}
            color={Colors.white}
            onClick={() => dispatch(setNavOpen(!navOpen))}
          />
        </MenuIcon>
        <NavMenu>
          <li>
            <NavLinks
              to="about-me"
              duration={500}
              spy={true}
              offset={-180}
              exact="true"
              smooth={true}
            >
              {Translate("About Me")}
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="what-is-coaching"
              offset={-180}
              duration={500}
              spy={true}
              exact="true"
              smooth={true}
            >
              {Translate("What is Coaching?")}
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="types-of-coaching"
              duration={500}
              spy={true}
              offset={-120}
              exact="true"
              smooth={true}
            >
              {Translate("Types of Coaching")}
            </NavLinks>
          </li>
          <li>
            <NavLinks
              to="testimony"
              duration={500}
              spy={true}
              offset={-150}
              exact="true"
              smooth={true}
            >
              {Translate("Testimonies")}
            </NavLinks>
          </li>
        </NavMenu>
        <Button onClick={() => setCalendlyOpen(true)}>
          <ButtonText> {Translate("Book Now")}</ButtonText>
        </Button>
        <PopupModal
          url="https://calendly.com/cx-coaching/meetingcong"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          pageSettings={{
            backgroundColor: "253659",
            primaryColor: "fff",
            textColor: "fff",
          }}
          onModalClose={() => setCalendlyOpen(false)}
          open={calendlyOpen}
        />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: sticky;
  display: grid;
  top: 0;
  z-index 10;
`;

const NavContainer = styled.div`
  height: 80px;
  padding: 20px;

  //445979
  //7557F0
  background: ${Colors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 65px;
  width: 300px;
  object-fit: cover;

  @media screen and (max-width: 415px) {
    height: 50px;
    width: 225px;
  }
`;

const Header = styled.div`
  height: 40px;
  background: black;
  position: sticky;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const HeaderText = styled.div`
  font-size: 1rem;
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  margin: 0 8px;
  display: flex;
  align-items: center;
  align-text: center;

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const NavLinks = styled(LinkS)`
  color: ${Colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 2em;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: "Anek Malayalam", sans-serif;

  &.active {
    color: ${Colors.tan};
    font-weight: bold;
  }
`;

const Button = styled.button`
  //d1ae95
  //F05786
  background: ${Colors.orange};
  height: 3rem;
  width: 8rem;
  border-radius: 30px;
  border: solid;
  border-color: ${Colors.white};
  border-width: 3px;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const ButtonText = styled.div`
  font-size: 1.2rem;
  font-family: "Kdam Thmor Pro", sans-serif;
  color: ${Colors.white};
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 1300px) {
    display: flex;
  }
`;
