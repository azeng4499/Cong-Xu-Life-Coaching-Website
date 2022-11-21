import React from "react";
import styled from "styled-components";
import "./about-coaching.css";
import { Colors } from "../utils/colors";
const AboutCoaching = () => {
  return (
    <div>
      <svg
        height="80px"
        width="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill={Colors.tan}
        style={{ background: Colors.blue, display: "block" }}
      >
        <path d="M0 0 L100 0 L100 100 Z" />
      </svg>
      <Page>
        <PageWrapper
          data-aos="fade-up"
          data-aos-once="true"
          className="what-is-coaching"
        >
          <TitleWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Header>What is Coaching?</Header>
              <Title>Questions You Might Have</Title>
            </div>
          </TitleWrapper>
          <CoachingWrapper>
            <div className="card">
              <QuestionText>What is coaching?</QuestionText>
              <AnswerText>
                Coaching is about connecting to your human energy. About 
                identifying and closing the gap between where you are right now
                and where you want to be in the future.  Coaches act as a mirror
                to reflect what you really want. What is the blind spot that
                holds you back? Take the new action to achieve it.
              </AnswerText>
            </div>
            <div className="card">
              <QuestionText>Coach vs Therapist</QuestionText>
              <Table>
                <tr>
                  <th style={{ border: "solid", padding: "1px 10px" }}>
                    Coach
                  </th>
                  <th style={{ border: "solid", padding: "1px 10px", color: Colors.gray }}>
                    Therapist
                  </th>
                </tr>
                <tr>
                  <TableCell>Focuses on the future</TableCell>
                  <TableCell_compare>Focuses on the past</TableCell_compare>
                </tr>
                <tr>
                  <TableCell>Asks about the possibility</TableCell>
                  <TableCell_compare>Asks about the problem</TableCell_compare>
                </tr>
                <tr>
                  <TableCell>Is not Clinical & Diagnostic</TableCell>
                  <TableCell_compare>Is clinical & Diagonstic</TableCell_compare>
                </tr>
              </Table>
            </div>
            <div className="card">
              <QuestionText>Coach vs Consultant</QuestionText>
              <Table>
                <tr>
                  <th style={{ border: "solid", padding: "1px 10px" }}>
                    Coach
                  </th>
                  <th style={{ border: "solid", padding: "1px 10px", color: Colors.gray }}>
                    Consultant
                  </th>
                </tr>
                <tr>
                  <TableCell>Won’t provide suggestions, believes clients know the answer</TableCell>
                  <TableCell_compare>
                  Will provide suggestions
                  </TableCell_compare>
                </tr>
                <tr>
                  <TableCell>
                  Focuses first on “What” (vision), and then on “How” (method)</TableCell>
                  <TableCell_compare>
                  Focuses  on “How” (method)
                  </TableCell_compare>
                </tr>
              </Table>
            </div>
            <div className="card">
              <QuestionText>What will coaching bring?</QuestionText>
              <UnorderedList>
                <li>Builds new awareness</li>
                <li>Lets you reflect on experiences, not just have them</li>
                <li>Challenges your beliefs</li>
                <li>
                  Stretches you out of your comfort zone ( yes, it is scary)
                </li>
                <li>Reprograms your mindset and creates a long-lasting impact</li>
                <li>Is not here to please you, but to serve you</li>
              </UnorderedList>
            </div>
          </CoachingWrapper>
        </PageWrapper>
      </Page>
    </div>
  );
};

export default AboutCoaching;
const Page = styled.div`
  background: ${Colors.blue};
  height: 675px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    height: 1025px;
  }

  @media screen and (max-width: 770px) {
    height: 1900px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 775px) {
    justify-content: center;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
`;

const Title = styled.div`
  color: ${Colors.orange};
  font-family: "Bebas Neue", cursive;
  font-size: 4rem;
  margin: 0px 0px 50px 0px;
  border-bottom: solid;
  border-width: 3px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 550px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 415px) {
    font-size: 2.3rem;
  }
`;

const Header = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const CoachingWrapper = styled.div`
  width: 1150px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: fit-content;
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

const QuestionText = styled.div`
  color: ${Colors.orange};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.5rem;
`;

const AnswerText = styled.div`
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1rem;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 0.8rem;
`;

const TableCell = styled.td`
  border: solid;
  padding: 5px 10px;
  text-align: center;
  color: ${Colors.darkBlue};
`;

const TableCell_compare = styled.td`
  border: solid;
  padding: 5px 10px;
  text-align: center;
  color: ${Colors.gray};
`;

const UnorderedList = styled.ul`
  color: ${Colors.darkBlue};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 0.9rem;
  margin-left: 20px;
`;
