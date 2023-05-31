import React from "react";
import styled from "styled-components";
import { Colors } from "../utils/colors";
import { AiOutlineMail } from "react-icons/ai";
import Subscribe from "../images/subscribe.svg";

const EmailAgg = () => {
  return (
    <EmailDiv>
      <Container>
        <HeaderContainer>
          <Image src={Subscribe} />
          <div>
            <Header>Subscribe to get a free life coaching resource</Header>
            <SubHeader>
              Additonally, get the latest news, updates, special offers
              delivered directly to your inbox
            </SubHeader>
          </div>
        </HeaderContainer>
        <div style={{ display: "flex", gap: "20px" }}>
          <Input type="text" />
          <div
            style={{
              height: "28px",
              width: "60px",
              backgroundColor: Colors.orange,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineMail size="large" />
          </div>
        </div>
      </Container>
    </EmailDiv>
  );
};

export default EmailAgg;

const EmailDiv = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Colors.darkBlue};
  color: white;

  @media screen and (max-width: 1300px) {
    height: 200px;
  }
`;

const Input = styled.input`
  color: black;
  outline: none;
  height: 30px;
  width: 300px;
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1rem;
  padding: 2px 10px;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

const Header = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.5rem;
  color: ${Colors.orange};

  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }
`;

const SubHeader = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1rem;
  max-width: 450px;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const Image = styled.img`
  height: 80px;

  @media screen and (max-width: 700px) {
    height: 50px;
  }
`;

const Container = styled.div`
  max-width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  // background-color: blue;

  @media screen and (max-width: 700px) {
    max-width: 400px;
    margin-top: 20px;
  }

  @media screen and (max-width: 450px) {
    max-width: 300px;
  }
`;
