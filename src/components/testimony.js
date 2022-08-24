import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Testimony1 from "../images/Babaraba.jpeg";
import Testimony2 from "../images/xiaoli.jpeg";
import Testimony3 from "../images/frank.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Colors } from "../utils/colors";

const Testimony = () => {
  const [people, setPeople] = useState({
    person1: false,
    person2: true,
    person3: false,
  });
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (people["person1"]) {
        changePerson("person2");
      } else if (people["person2"]) {
        changePerson("person3");
      } else {
        changePerson("person1");
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [people]);

  const changePerson = (person) => {
    if (person === "person1") {
      setPeople({ person1: true, person2: false, person3: false });
    } else if (person === "person2") {
      setPeople({ person1: false, person2: true, person3: false });
    } else {
      setPeople({ person1: false, person2: false, person3: true });
    }
  };

  return (
    <>
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
        <TestimonyWrapper>
          <TitleWrapper
            data-aos="fade-up"
            data-aos-once="true"
            className="testimony"
          >
            <Header>Testimonies</Header>
            <Title>What People Are Saying</Title>
          </TitleWrapper>
          <TestimonyContainer data-aos="fade-up" data-aos-once="true">
            <div style={{ display: "flex" }}>
              <RiDoubleQuotesL size={"2em"} style={{ color: Colors.white }} />
              <TestimonyText>
                {people.person1 ? (
                  <div>
                    I coached with Cong, who taught me how to have a mirror ( of
                    course not the mirror hanging on the wall!). By following
                    her questions, I could listen to myself and talk to myself,
                    and Cong did a great job letting me reflect on what came
                    from my true heart and directing me on the path along the
                    way. I strongly recommend you take a coaching
                  </div>
                ) : people.person2 ? (
                  <div>
                    <div>
                      Life coaching helped me understand myself better, overcome
                      obstacles and maximize my strengths in my personal and
                      professional lives.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      I was not into the idea of having a coach while starting
                      my business. However, after just one session with Amy, I
                      found myself with a renewed sense of focus. Amy has a
                      talent for listening and allowing you to find your own
                      path. My sessions with her helped me step outside my
                      comfort zone and find the courage to face challenges by
                      setting priorities and deadlines. I am grateful to her
                      because she has taught me how to be accountable to myself.
                    </div>
                  </div>
                )}
              </TestimonyText>
              <RiDoubleQuotesR
                size={"2em"}
                style={{
                  justifySelf: "end",
                  alignSelf: "end",
                  color: Colors.white,
                }}
              />
            </div>
          </TestimonyContainer>
          <TestimonyToolbar data-aos="fade-up" data-aos-once="true">
            <TestimonyPersonContainer>
              <TestimonyPerson
                src={Testimony1}
                highlighted={people.person1}
                onClick={() => {
                  changePerson("person1");
                }}
              />
              <TestimonyPersonLabel>Barbara Wilkinson</TestimonyPersonLabel>
            </TestimonyPersonContainer>
            <TestimonyPersonContainer>
              <TestimonyPerson
                src={Testimony2}
                highlighted={people.person2}
                onClick={() => {
                  changePerson("person2");
                }}
              />
              <TestimonyPersonLabel>Xiao Li</TestimonyPersonLabel>
            </TestimonyPersonContainer>
            <TestimonyPersonContainer>
              <TestimonyPerson
                src={Testimony3}
                highlighted={people.person3}
                onClick={() => {
                  changePerson("person3");
                }}
              />
              <TestimonyPersonLabel>Frank Pugliese</TestimonyPersonLabel>
            </TestimonyPersonContainer>
          </TestimonyToolbar>
        </TestimonyWrapper>
      </Page>
    </>
  );
};

export default Testimony;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;

  @media screen and (max-width: 775px) {
    align-self: center;
    align-items: center;
  }
`;

const TestimonyWrapper = styled.div`
  height: 550px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    width: 600px;
  }
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
    font-size: 2.6rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.3rem;
  }
`;

const TestimonyText = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.5rem;
  max-width: 1000px;
  color: ${Colors.white};
  text-align: center;

  @media screen and (max-width: 1300px) {
    max-width: 400px;
  }

  @media screen and (max-width: 775px) {
    max-width: 300px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 775px) {
    max-width: 200px;
  }
`;

const TestimonyContainer = styled.div`
  height: 250px;
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 40px;
  border-width: 4px;
  border-color: white;
  background: ${Colors.darkBlue};
  @media screen and (max-width: 1300px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (max-width: 775px) {
    width: 400px;
    height: 550px;
  }

  @media screen and (max-width: 550px) {
    width: 325px;
    height: 750px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 750px;
  }
`;

const TestimonyToolbar = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestimonyPersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;

  @media screen and (max-width: 775px) {
    margin: 0px 20px;
  }
  @media screen and (max-width: 375px) {
    margin: 0px 5px;
  }
`;

const TestimonyPerson = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;
  border: solid 5px;
  border-color: ${({ highlighted }) =>
    highlighted ? Colors.orange : Colors.white};

  @media screen and (max-width: 550px) {
    height: 80px;
    width: 80px;
  }
`;

const TestimonyPersonLabel = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
  color: ${Colors.white}}

  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const Header = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const Page = styled.div`
  background: ${Colors.blue};
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    height: 800px;
  }

  @media screen and (max-width: 775px) {
    height: 650px;
  }
`;
