import React from "react";
import styled from "styled-components";

const PostContainer = (props) => {
  return <StyleContainer>{props.children}</StyleContainer>;
};

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1080px;
  border: 2px solid black;
  place-content: center;
  place-items: center;
  margin: 0 auto;
`;

export default PostContainer;
