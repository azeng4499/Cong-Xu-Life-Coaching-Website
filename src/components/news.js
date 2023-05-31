import React from "react";
import { LinkedInEmbed } from "react-social-media-embed";
import styled from "styled-components";
import "./news.css";
import { Colors } from "../utils/colors";

const urlArr = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7057810024986746880",
];

const News = () => {
  return (
    <>
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
      <Page className="news">
        <PageWrapper>
          <HeaderWrapper data-aos="fade-up" data-aos-once="true">
            <div>
              <Header>News</Header>
              <Title>{"Recent Posts"}</Title>
            </div>
          </HeaderWrapper>
          <div
            style={{
              width: "100vw",
              height: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container className="container">
              {urlArr.map((url) => {
                return (
                  <div className="contain">
                    <LinkedInEmbed
                      url={url}
                      width={300}
                      height={300}
                      className="embed"
                    />
                  </div>
                );
              })}
            </Container>
          </div>
        </PageWrapper>
      </Page>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  overflow-x: scroll;
  width: 1200px;
  height: 320px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.tan};
  border-right: solid;
  border-right-width: 10px;
  border-right-color: ${Colors.orange};

  @media screen and (max-width: 1300px) {
    width: 800px;
  }

  @media screen and (max-width: 850px) {
    width: 600px;
  }

  @media screen and (max-width: 650px) {
    width: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const PageWrapper = styled.div`
  margin-bottom: 50px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 775px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Header = styled.div`
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
  margin-top: 40px;
`;

const Title = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${Colors.orange};
  font-family: "Bebas Neue", cursive;
  font-size: 4rem;
  margin: 0px 0px 30px 0px;
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
  // height: 650px;
  background: ${Colors.tan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  // @media screen and (max-width: 1300px) {
  //   height: 1125px;
  // }

  // @media screen and (max-width: 775px) {
  //   height: 1850px;
  // }
`;

export default News;
