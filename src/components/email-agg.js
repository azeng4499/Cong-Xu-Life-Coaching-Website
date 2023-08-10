import React from "react";
import styled from "styled-components";
import { Colors } from "../utils/colors";
import Subscribe from "../images/self-reflection.png";
import { Link as LinkS } from "react-scroll";
// import { db } from "../firebase";
// import { addDoc, collection, Timestamp } from "firebase/firestore";

const EmailAgg = () => {
  // const sendEmail = async (email) => {
  //   console.log(email);
  //   await addDoc(collection(db, "emails"), {
  //     email: email,
  //     createdAt: Timestamp.fromDate(new Date()),
  //   });

  //   console.log("ok");
  // };

  return (
    <EmailDiv>
      <Container>
        <HeaderContainer>
          <Image src={Subscribe} />
          <HeaderText>
            <Header>Subscribe to get a free life coaching resource</Header>
            <SubHeader>
              Unlock Your True Potential with Our Expert-Curated Content and
              Tools
            </SubHeader>
          </HeaderText>
        </HeaderContainer>
        <NavLinks
          to="news"
          duration={500}
          spy={true}
          offset={-150}
          exact="true"
          smooth={true}
        >
          Subscribe Now!
        </NavLinks>
      </Container>
    </EmailDiv>
  );
};

export default EmailAgg;

const EmailDiv = styled.div`
  height: fit-content;
  min-height: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Colors.darkBlue};
  color: white;
`;

const Header = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.5rem;
  color: ${Colors.orange};

  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 535px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const SubHeader = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1rem;
  max-width: 450px;

  @media screen and (max-width: 535px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

const Image = styled.img`
  height: 80px;

  // @media screen and (max-width: 700px) {
  //   height: 50px;
  // }
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1100px) {
    width: 100vw;
    padding: 0px 50px;
    justify-content: center;
    gap: 50px;
  }

  // @media screen and (max-width: 900px) {
  //   flex-direction: column;
  // }
`;

const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NavLinks = styled(LinkS)`
  background-color: ${Colors.orange};
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  border: solid;
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const HeaderText = styled.div``;
