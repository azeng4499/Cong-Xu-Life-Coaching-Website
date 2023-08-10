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
          <HeaderWrapper>
            <div>
              <Header>News</Header>
              <Title>{"Recent Posts"}</Title>
            </div>
          </HeaderWrapper>
          {/* <div
            style={{
              width: "100vw",
              height: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
          <Container className="container">
            {urlArr.map((url) => {
              return (
                <div>
                  <LinkedInEmbed
                    url={url}
                    width={275}
                    height={300}
                    className="embed"
                  />
                </div>
              );
            })}
          </Container>
          {/* </div> */}
        </PageWrapper>
      </Page>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1200px;
  height: 320px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 650px;
    height: 650px;
  }

  @media screen and (max-width: 775px) {
    grid-template-columns: 1fr;
    width: 100vw;
    height: 1300px;
  }
`;

const PageWrapper = styled.div`
  // margin-bottom: 50px;

  // @media screen and (max-width: 1300px) {
  //   margin-bottom: 20px;
  // }
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
  background: ${Colors.tan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
`;

export default News;
