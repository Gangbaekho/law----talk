import React from "react";
import styled from "styled-components";

const PostContainer = (props) => {
  return <StyleContainer>{props.children}</StyleContainer>;
};

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1080px;
  place-content: center;
  place-items: center;
  margin: 0 auto;
  padding: 3rem 0;
  border-top: 1px solid #555;
`;

export default PostContainer;
