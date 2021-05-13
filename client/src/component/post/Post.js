import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Post = ({ id, postType, title, content, postImageUrl, mongoLawyer }) => {
  const history = useHistory();

  return (
    <StyleContainer
      onClick={() => {
        history.push(`/post/postIds/${id}`);
      }}
    >
      <div className="image-container"></div>
      <div className="post-info">
        <h4>{postType}</h4>
        <h3>{title}</h3>
      </div>
      <div>
        <p className="lawyer-name">
          <span className="by">BY</span> {mongoLawyer.lawyerName}
        </p>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6fr 3fr 1fr;
  width: 340px;
  height: 360px;
  cursor: pointer;

  .image-container {
    background-image: url("/images/image1.s.jpg");
    background-size: cover;
    background-position: center;
  }

  .post-info {
    h4 {
      color: #b1a1a5;
      text-decoration: underline;
      padding: 0.5rem 0;
    }
    h3 {
      color: #555;
    }
  }
  .lawyer-name {
    color: #555;
    font-weight: bold;
    .by {
      color: #b1a1a5;
    }
  }
`;

export default Post;
