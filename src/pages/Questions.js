import React, { useEffect, useState } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "./App.css";
import { FaCirclePlay } from "react-icons/fa6";
import { db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Questions = () => {
  const [open, setOpen] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const getData = async () => {
    const docRef = doc(db, "website-db", "coaching-questions");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    setInfo({
      whatIsCoaching: data["what-is-coaching"],
      coachVsTherapist: data["coach-vs-therapist"],
      coachVsConsultant: data["coach-vs-consultant"],
      whatWillCoachingBring: data["what-will-coaching-bring"],
    });
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [info, setInfo] = useState({
    whatIsCoaching: { description: null, "video-link": null },
    coachVsTherapist: { table: {}, "video-link": null },
    coachVsConsultant: { table: {}, "video-link": null },
    whatWillCoachingBring: { "bullet-points": [], "video-link": null },
  });

  return (
    <section className="py-20 2xl:py-40" style={{ backgroundColor: "#253658" }}>
      <div class="faq"></div>
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <span className="text-lg font-bold text-blue-500">
            Hey! Have any questions?
          </span>
          <h2 className="mt-8 text-7xl font-bold font-heading text-white">
            FAQ's
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul>
            <li
              className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl"
              onClick={() => {
                setOpen({
                  one: !open.one,
                  two: false,
                  three: false,
                  four: false,
                });
              }}
            >
              <button className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    1
                  </span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">What is coaching?</h3>
                    <span className="ml-4">
                      <svg
                        className="w-4 h-4"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {open.one ? (
                          <path
                            d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                            fill="#1F40FF"
                          />
                        ) : (
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          />
                        )}
                      </svg>
                    </span>
                  </div>
                  <div
                    className="mt-6"
                    style={{
                      display: open.one ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    <p className="mb-5 text-xl">
                      {info.whatIsCoaching.description}
                    </p>
                    <p
                      style={{
                        display: " flex",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "10px",
                        color: "#f27457",
                      }}
                    >
                      <FaCirclePlay />{" "}
                      <div
                        style={{ borderBottom: "solid" }}
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(
                            info.whatIsCoaching["video-link"],
                            "_blank"
                          );
                        }}
                      >
                        watch to learn more
                      </div>
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li
              className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl"
              onClick={() => {
                setOpen({
                  one: false,
                  two: !open.two,
                  three: false,
                  four: false,
                });
              }}
            >
              <button className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    2
                  </span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Coach vs Therapist</h3>
                    <span className="ml-4">
                      <svg
                        className="w-4 h-4"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {open.two ? (
                          <path
                            d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                            fill="#1F40FF"
                          />
                        ) : (
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          />
                        )}
                      </svg>
                    </span>
                  </div>
                  <div
                    className="mt-6"
                    style={{
                      display: open.two ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    <table>
                      <tr>
                        <th style={{ border: "solid", padding: "1px 10px" }}>
                          Coach
                        </th>
                        <th
                          style={{
                            border: "solid",
                            padding: "1px 10px",
                            color: "#f27457",
                          }}
                        >
                          Therapist
                        </th>
                      </tr>
                      {Object.keys(info.coachVsTherapist.table).map((key) => {
                        return (
                          <tr>
                            <td
                              style={{
                                border: "solid",
                                padding: "2px 8px",
                              }}
                            >
                              {key}
                            </td>
                            <td
                              style={{
                                color: "#f27457",
                                border: "solid",
                                padding: "2px 8px",
                              }}
                            >
                              {info.coachVsTherapist.table[key]}
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                    <p
                      style={{
                        display: " flex",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "10px",
                        color: "#f27457",
                        marginTop: "20px",
                      }}
                    >
                      <FaCirclePlay />{" "}
                      <div
                        style={{ borderBottom: "solid" }}
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(
                            info.coachVsTherapist["video-link"],
                            "_blank"
                          );
                        }}
                      >
                        watch to learn more
                      </div>
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li
              className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl"
              onClick={() => {
                setOpen({
                  one: false,
                  two: false,
                  three: !open.three,
                  four: false,
                });
              }}
            >
              <button className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    3
                  </span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Coach vs Consultant</h3>
                    <span className="ml-4">
                      <svg
                        className="w-4 h-4"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {open.three ? (
                          <path
                            d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                            fill="#1F40FF"
                          />
                        ) : (
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          />
                        )}
                      </svg>
                    </span>
                  </div>
                  <div
                    className="mt-6"
                    style={{
                      display: open.three ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    <table>
                      <tr>
                        <th style={{ border: "solid", padding: "1px 10px" }}>
                          Coach
                        </th>
                        <th
                          style={{
                            border: "solid",
                            padding: "1px 10px",
                            color: "#f27457",
                          }}
                        >
                          Consultant
                        </th>
                      </tr>
                      {Object.keys(info.coachVsConsultant.table).map((key) => {
                        return (
                          <tr>
                            <td
                              style={{
                                border: "solid",
                                padding: "2px 8px",
                              }}
                            >
                              {key}
                            </td>
                            <td
                              style={{
                                color: "#f27457",
                                border: "solid",
                                padding: "2px 8px",
                              }}
                            >
                              {info.coachVsConsultant.table[key]}
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                    <p
                      style={{
                        display: " flex",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "10px",
                        color: "#f27457",
                        marginTop: "20px",
                      }}
                    >
                      <FaCirclePlay />{" "}
                      <div
                        style={{ borderBottom: "solid" }}
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(
                            info.coachVsConsultant["video-link"],
                            "_blank"
                          );
                        }}
                      >
                        watch to learn more
                      </div>
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li
              className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl"
              onClick={() => {
                setOpen({
                  one: false,
                  two: false,
                  three: false,
                  four: !open.four,
                });
              }}
            >
              <button className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    4
                  </span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                      What will coaching bring?
                    </h3>
                    <span className="ml-4">
                      <svg
                        className="w-4 h-4"
                        width={18}
                        height={10}
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {open.four ? (
                          <path
                            d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                            fill="#1F40FF"
                          />
                        ) : (
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          />
                        )}
                      </svg>
                    </span>
                  </div>
                  <div
                    className="mt-6"
                    style={{
                      display: open.four ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    <ul>
                      {info.whatWillCoachingBring["bullet-points"].map(
                        (bullet) => {
                          return (
                            <li>
                              <div class="bullet-point-div">
                                <VscDebugBreakpointLog />
                                {bullet}
                              </div>
                            </li>
                          );
                        }
                      )}
                    </ul>
                    <p
                      style={{
                        display: " flex",
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "10px",
                        color: "#f27457",
                        marginTop: "20px",
                      }}
                    >
                      <FaCirclePlay />{" "}
                      <div
                        style={{ borderBottom: "solid" }}
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(
                            info.whatWillCoachingBring["video-link"],
                            "_blank"
                          );
                        }}
                      >
                        watch to learn more
                      </div>
                    </p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
