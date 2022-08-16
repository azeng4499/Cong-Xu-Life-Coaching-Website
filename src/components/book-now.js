import React from "react";
import styled from "styled-components";
import { Colors } from "../utils/colors";

const BookNow = () => {
  return (
    <>
      <svg
        height="80px"
        width="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill={Colors["blue"]}
        style={{ background: Colors["tan"], display: "block" }}
      >
        <path d="M0 0 L100 0 L100 100 Z" />
      </svg>
      <Page></Page>
    </>
  );
};

export default BookNow;

const Page = styled.div`
  height: 650px;
  background: ${Colors["tan"]};
`;
