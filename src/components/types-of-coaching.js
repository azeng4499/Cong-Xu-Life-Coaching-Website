import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Career from "../images/career-final.svg";
import Business from "../images/business-final.svg";
import Personal from "../images/personal-final.svg";
import Relationship from "../images/relationship-final.svg";
import { Colors } from "../utils/colors";
import Modal from "react-modal";
import { FaReadme } from "react-icons/fa";

const TypesOfCoaching = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState("relationship");

  const ModalHeaderText = styled.div`
    color: ${({ type }) =>
      type === modalOption ? Colors.orange : Colors.white};
    font-family: "Bebas Neue", cursive;
    cursor: pointer;
  `;

  const getTypeDescription = () => {
    switch (modalOption) {
      case "relationship":
        return "This is the relationship description";
      case "personal":
        return "This is the personal description";
      case "career":
        return "This is the career description";
      case "business":
        return "This is the business description";
      default:
        return null;
    }
  };

  return (
    <>
      <CustomModal isOpen={modalOpen}>
        <ModalContainer>
          <ModalHeader>
            <ModalHeaderText
              onClick={() => setModalOption("relationship")}
              type={"relationship"}
            >
              Relationship
            </ModalHeaderText>
            <ModalHeaderText
              onClick={() => setModalOption("personal")}
              type={"personal"}
            >
              Personal
            </ModalHeaderText>
            <ModalHeaderText
              onClick={() => setModalOption("career")}
              type={"career"}
            >
              Career
            </ModalHeaderText>
            <ModalHeaderText
              onClick={() => setModalOption("business")}
              type={"business"}
            >
              Business
            </ModalHeaderText>
          </ModalHeader>
          <ModalBody>{getTypeDescription()}</ModalBody>
          <ModalHeader>
            <CloseButton onClick={() => setModalOpen(false)}>Close</CloseButton>
          </ModalHeader>
        </ModalContainer>
      </CustomModal>
      <svg
        height="80px"
        width="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill={Colors.blue}
        style={{ background: Colors.tan, display: "block" }}
      >
        <path d="M0 0 L100 0 L100 100 Z" />
      </svg>
      <Page className="types-of-coaching">
        <PageWrapper>
          <HeaderWrapper data-aos="fade-up" data-aos-once="true">
            <div>
              <Header>Types of Coaching</Header>
              <Title>How I Can Help</Title>
            </div>
            <ReadMore onClick={() => setModalOpen(true)}>
              <FaReadme />
              Read more about each type
            </ReadMore>
          </HeaderWrapper>
          <BlobWrapper>
            <BlobContainer data-aos="fade-up" data-aos-once="true">
              <svg
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="blobSvg"
                width="300px"
                height="155px"
                style={{
                  transform: "scale(3.3) translate(0px, 15px)",
                  fill: Colors.darkBlue,
                  overflow: "hidden",
                }}
              >
                <g transform="translate(174.07010650634766, -2.4157562255859375)">
                  <path
                    class="blob"
                    d="M351.5,299.5Q349,349,299.5,388.5Q250,428,185.5,403.5Q121,379,114.5,314.5Q108,250,93.5,164.5Q79,79,164.5,60.5Q250,42,303,93Q356,144,355,197Q354,250,351.5,299.5Z"
                  ></path>
                </g>
              </svg>
              <Content onClick={() => console.log("clicked")}>
                <BlobImage src={Relationship} />
                <Label style={{ padding: "10px 20px" }}>Relationship</Label>
              </Content>
            </BlobContainer>
            <BlobContainer data-aos="fade-up" data-aos-once="true">
              <svg
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="blobSvg"
                width="300px"
                height="155px"
                style={{
                  transform: "scale(3.2) translate(-10px, 3px)",
                  fill: Colors.darkBlue,
                }}
              >
                <g transform="translate(174.07010650634766, -2.4157562255859375)">
                  <path
                    class="blob"
                    d="M369,318Q386,386,318,433Q250,480,207,408Q164,336,147.5,293Q131,250,138.5,198Q146,146,198,135.5Q250,125,335,102.5Q420,80,386,165Q352,250,369,318Z"
                  ></path>
                </g>
              </svg>
              <Content style={{ marginLeft: "20px" }}>
                <BlobImage src={Personal} />
                <Label style={{ marginLeft: "10px", padding: "10px 30px" }}>
                  Personal
                </Label>
              </Content>
            </BlobContainer>
            <BlobContainer data-aos="fade-up" data-aos-once="true">
              <svg
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="blobSvg"
                width="300px"
                height="155px"
                style={{
                  transform: "scale(3.5) translate(-14px, 15px)",
                  fill: Colors.darkBlue,
                }}
              >
                <g transform="translate(174.07010650634766, -2.4157562255859375)">
                  <path
                    class="blob"
                    d="M377,313.5Q402,377,336,371.5Q270,366,230,360Q190,354,170.5,320Q151,286,141,246.5Q131,207,139,139Q147,71,213.5,77Q280,83,359.5,87Q439,91,395.5,170.5Q352,250,377,313.5Z"
                  ></path>
                </g>
              </svg>
              <Content>
                <BlobImage src={Career} />
                <Label style={{ marginLeft: "20px", padding: "10px 60px" }}>
                  Career
                </Label>
              </Content>
            </BlobContainer>
            <BlobContainer data-aos="fade-up" data-aos-once="true">
              <svg
                class="svg3"
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="300px"
                height="155px"
                style={{
                  transform: "scale(3) translate(-12px, 10px)",
                  fill: Colors.darkBlue,
                }}
              >
                <g transform="translate(174.07010650634766, -2.4157562255859375)">
                  <path d="M378,298.5Q365,347,327.5,411.5Q290,476,224.5,442Q159,408,149.5,349Q140,290,124.5,244.5Q109,199,151.5,176Q194,153,242,87.5Q290,22,357,63Q424,104,407.5,177Q391,250,378,298.5Z"></path>
                </g>
              </svg>
              <Content>
                <BlobImage src={Business} />
                <Label style={{ marginRight: "10px", padding: "10px 30px" }}>
                  Business
                </Label>
              </Content>
            </BlobContainer>
          </BlobWrapper>
        </PageWrapper>
      </Page>
    </>
  );
};

export default TypesOfCoaching;

const PageWrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 60px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 775px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  background: ${Colors.darkBlue};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.tan};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReadMore = styled.div`
  margin-bottom: 40px;
  color: ${Colors.orange};
  text-decoration: underline;
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CustomModal = styled(Modal)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CloseButton = styled.div`
  color: ${Colors.white};
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  height: calc(100vh - 300px);
  width: calc(100vw - 50px);
  background: red;
`;

const BlobContainer = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    margin: 50px 0px;
  }

  @media screen and (max-width: 775px) {
    margin: 30px 0px;
  }
`;

const BlobImage = styled.img`
  height: 250px;
  width: 250px;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 2.2rem;
  color: ${Colors.white};
  width: fit-content;
  display: flex;
  justify-content: center;
`;

const BlobWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
  }

  @media screen and (max-width: 775px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const Title = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${Colors.orange};
  font-family: "Bebas Neue", cursive;
  font-size: 4rem;
  margin: 0px 0px 75px 0px;
  display: flex;
  align-items: center;
  border-bottom: solid;
  border-width: 3px;

  @media screen and (max-width: 775px) {
    margin: 0px 0px 40px 0px;
  }

  @media screen and (max-width: 375px) {
    font-size: 3.5rem;
  }
`;

const Page = styled.div`
  height: 650px;
  background: ${Colors.tan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    height: 1125px;
  }

  @media screen and (max-width: 775px) {
    height: 1850px;
  }
`;
