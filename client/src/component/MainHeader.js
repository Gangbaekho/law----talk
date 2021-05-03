import React from "react";
import styled from "styled-components";

const MainHeader = (props) => {
  return (
    <MainHeaderContainer>
      <div>First section</div>
      <Logo>JINTALK</Logo>
      <div>Third section</div>
      <div>First section</div>
      <div>Second section</div>
      <div>Third section</div>
      <div>First section</div>
      <div>Second section</div>
      <div>Third section</div>
    </MainHeaderContainer>
  );
};

const MainHeaderContainer = styled.div`
  width: 1080px;
  height: 200px;
  margin: 0 auto;
  margin-top: 50px;
  border: 2px solid black;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Logo = styled.div`
  color: orange;
  font-size: 40px;
  font-weight: bold;
`;

export default MainHeader;
