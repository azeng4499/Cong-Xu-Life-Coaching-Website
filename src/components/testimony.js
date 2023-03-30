import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Testimony1 from "../images/Leigh.png";
import Testimony2 from "../images/Cat.png";
import Testimony3 from "../images/Anna.jpg";
import Testimony4 from "../images/Babaraba.jpeg";
import Testimony5 from "../images/frank.jpeg";
import Testimony6 from "../images/xiaoli.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Colors } from "../utils/colors";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Testimony = () => {
  const [people, setPeople] = useState({
    person1: true,
    person2: false,
    person3: false,
    person4: false,
    person5: false,
    person6: false,
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
      } else if (people["person3"]) {
        changePerson("person4");
      } else if (people["person4"]) {
        changePerson("person5");
      } else if (people["person5"]) {
        changePerson("person6");
      } else {
        changePerson("person1");
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [people]);

  const changePerson = (person) => {
    if (person === "person1") {
      setPeople({
        person1: true,
        person2: false,
        person3: false,
        person4: false,
        person5: false,
        person6: false,
      });
    } else if (person === "person2") {
      setPeople({
        person1: false,
        person2: true,
        person3: false,
        person4: false,
        person5: false,
        person6: false,
      });
    } else if (person === "person3") {
      setPeople({
        person1: false,
        person2: false,
        person3: true,
        person4: false,
        person5: false,
        person6: false,
      });
    } else if (person === "person4") {
      setPeople({
        person1: false,
        person2: false,
        person3: false,
        person4: true,
        person5: false,
        person6: false,
      });
    } else if (person === "person5") {
      setPeople({
        person1: false,
        person2: false,
        person3: false,
        person4: false,
        person5: true,
        person6: false,
      });
    } else {
      setPeople({
        person1: false,
        person2: false,
        person3: false,
        person4: false,
        person5: false,
        person6: true,
      });
    }
  };

  const getCurrentPerson = () => {
    for (let person in people) {
      if (people[person] === true) {
        return parseInt(person[person.length - 1]);
      }
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
          <TestimonyContainerPlaceHolder>
            <TestimonyContainer data-aos="fade-up" data-aos-once="true">
              <TestimonyDiv
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TestimonyDivDiv
                  style={{
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <RiDoubleQuotesL
                    size={"1em"}
                    style={{ color: Colors.white }}
                  />
                  <TestimonyText>
                    {people.person1 ? (
                      <div>
                        The work I did with Cong lifted what felt like a huge
                        weight of concern and wasted energy from my shoulders.
                        Cong's deep listening and her reflecting back to me what
                        I had shared gave me the opportunity to see my situation
                        from a different lens in my mind. The clarity of her
                        reflection allowed me to release the unnecessary burden
                        I had placed on myself, to accept a situation without
                        having to change it. I feel so much happier and at peace
                        with myself and others because of my time with
                        Cong......Cong is a blessing!
                      </div>
                    ) : people.person2 ? (
                      <div>
                        Through her excellent coaching skills, Cong gently led
                        me to an inner path that has always been there, but that
                        somehow I had lost sight of. That's the amazing thing–we
                        all have subconscious beliefs that can hold us back from
                        becoming the best person we can possibly be. Cong's
                        coaching let me brush the cobwebs from my own mirror to
                        see the hidden but ever-present and true potential
                        within myself that is joyfully within my reach.
                      </div>
                    ) : people.person3 ? (
                      <div>
                        Working with Cong has been a delightful enlightening
                        experience. She has helped me become more aware of my
                        own internal processes, clarify my overall wants and
                        goals, and provided a sense of support and
                        accountability.
                      </div>
                    ) : people.person4 ? (
                      <div>
                        I coached with Cong, who taught me how to have a mirror
                        ( of course not the mirror hanging on the wall!). By
                        following her questions, I could listen to myself and
                        talk to myself, and Cong did a great job letting me
                        reflect on what came from my true heart and directing me
                        on the path along the way. I strongly recommend you take
                        a coaching.
                      </div>
                    ) : people.person5 ? (
                      <div>
                        <div>
                          I was not into the idea of having a coach while
                          starting my business. However, after just one session
                          with Cong, I found myself with a renewed sense of
                          focus. Cong has a talent for listening and allowing
                          you to find your own path. My sessions with her helped
                          me step outside my comfort zone and find the courage
                          to face challenges by setting priorities and
                          deadlines. I am grateful to her because she has taught
                          me how to be accountable to myself.
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          Life coaching helped me understand myself better,
                          overcome obstacles and maximize my strengths in my
                          personal and professional lives.
                        </div>
                      </div>
                    )}
                  </TestimonyText>
                  <RiDoubleQuotesR
                    size={"1em"}
                    style={{
                      justifySelf: "end",
                      alignSelf: "end",
                      color: Colors.white,
                    }}
                  />
                </TestimonyDivDiv>
              </TestimonyDiv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <MdArrowBackIos
                  color={Colors.orange}
                  size="1.5rem"
                  onClick={() => {
                    const currNum = getCurrentPerson();
                    if (currNum === 0) {
                      changePerson("person6");
                    } else {
                      changePerson(`person${currNum - 1}`);
                    }
                  }}
                />
                {people.person1 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Leigh S.</TestimonyText>
                    <TestimonyPerson src={Testimony1}></TestimonyPerson>
                  </div>
                ) : people.person2 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Caterina M.</TestimonyText>
                    <TestimonyPerson src={Testimony2}></TestimonyPerson>
                  </div>
                ) : people.person3 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Anna J.</TestimonyText>
                    <TestimonyPerson src={Testimony3}></TestimonyPerson>
                  </div>
                ) : people.person4 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Barbara W.</TestimonyText>
                    <TestimonyPerson src={Testimony4}></TestimonyPerson>
                  </div>
                ) : people.person5 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Frank P.</TestimonyText>
                    <TestimonyPerson src={Testimony5}></TestimonyPerson>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <TestimonyText>- Xiao L.</TestimonyText>
                    <TestimonyPerson src={Testimony6}></TestimonyPerson>
                  </div>
                )}
                <MdArrowForwardIos
                  color={Colors.orange}
                  size="1.5rem"
                  onClick={() => {
                    const currNum = getCurrentPerson();
                    if (currNum === 6) {
                      changePerson("person1");
                    } else {
                      changePerson(`person${currNum + 1}`);
                    }
                  }}
                />
              </div>
            </TestimonyContainer>
          </TestimonyContainerPlaceHolder>
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

const TestimonyDiv = styled.div`
  height: 100px;

  @media screen and (max-width: 1300px) {
    height: 250px;
  }

  @media screen and (max-width: 775px) {
    height: 300px;
  }
`;

const TestimonyDivDiv = styled.div`
  @media screen and (max-width: 775px) {
    max-height: 300px;
    overflow: scroll;
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
  font-size: 1rem;
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

const TestimonyContainerPlaceHolder = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  height: 250px;
  width: 1200px;

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
    height: 500px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 500px;
  }
`;

const TestimonyContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: solid;
  border-radius: 40px;
  border-width: 4px;
  border-color: white;
  gap: 20px;
  background: ${Colors.darkBlue};

  // @media screen and (max-width: 1300px) {
  //   width: 600px;
  //   height: 400px;
  // }

  // @media screen and (max-width: 775px) {
  //   width: 400px;
  //   height: 550px;
  // }

  // @media screen and (max-width: 550px) {
  //   width: 325px;
  //   height: 500px;
  // }

  // @media screen and (max-width: 375px) {
  //   width: 300px;
  //   height: 500px;
  // }
`;

// const TestimonyToolbar = styled.div`
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const TestimonyPersonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 50px;

//   @media screen and (max-width: 775px) {
//     margin: 0px 20px;
//   }
//   @media screen and (max-width: 375px) {
//     margin: 0px 5px;
//   }
// `;

const TestimonyPerson = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;

  // @media screen and (max-width: 550px) {
  //   height: 50px;
  //   width: 50px;
  // }
`;

// const TestimonyPersonLabel = styled.div`
//   font-family: "Kdam Thmor Pro", sans-serif;
//   font-size: 1rem;
//   margin-top: 10px;
//   text-align: center;
//   color: ${Colors.white}}

//   @media screen and (max-width: 550px) {
//     font-size: 0.8rem;
//   }
// `;

const Header = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.2rem;
`;

const Page = styled.div`
  background: ${Colors.blue};
  // height: 650px;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 1300px) {
  //   height: 800px;
  // }

  // @media screen and (max-width: 775px) {
  //   height: 650px;
  // }
`;
