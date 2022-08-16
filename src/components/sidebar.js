import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { Colors } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "../store/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navOpen = useSelector((state) => state.navOpen);

  return (
    <SidebarContainer isOpen={navOpen}>
      <Icon onClick={() => dispatch(setNavOpen(!navOpen))}>
        <FaTimes color="white" />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          to="about-me"
          offset={-140}
          onClick={() => dispatch(setNavOpen(!navOpen))}
        >
          About Me
        </SidebarLink>
        <SidebarLink
          to="what-is-coaching"
          offset={-140}
          onClick={() => dispatch(setNavOpen(!navOpen))}
        >
          What Is Coaching
        </SidebarLink>
        <SidebarLink
          to="types-of-coaching"
          offset={-120}
          onClick={() => dispatch(setNavOpen(!navOpen))}
        >
          Types of Coaching
        </SidebarLink>
        <SidebarLink
          to="testimony"
          offset={-200}
          onClick={() => dispatch(setNavOpen(!navOpen))}
        >
          Testimonies
        </SidebarLink>
        <SideBtnWrap>
          <Button>
            <ButtonText>Book Now</ButtonText>
          </Button>
        </SideBtnWrap>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: ${Colors["darkBlue"]};
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${Colors["white"]};
  cursor: pointer;
  font-family: "Kdam Thmor Pro", sans-serif;

  &:hover {
    color: ${Colors["tan"]}
    transition: 0.2 ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const Button = styled.button`
  background: ${Colors["orange"]};
  height: 3rem;
  width: 8rem;
  border-radius: 30px;
  border: solid;
  border-color: ${Colors["white"]};
  border-width: 3px;
`;

const ButtonText = styled.div`
  font-size: 1.2rem;
  font-family: "Kdam Thmor Pro", sans-serif;
  color: ${Colors["white"]};
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
