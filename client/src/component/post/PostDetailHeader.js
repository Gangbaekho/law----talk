import React from "react";
import styled from "styled-components";

const PostDetailHeader = ({ postType, domainName, lawyerName, title }) => {
  return (
    <StyleContainer>
      <div className="title">
        <h3>포스트</h3>
      </div>
      <div className="image-container">
        <p className="item type">{postType}</p>
        <p className="item specific-domain">{domainName}</p>
        <h1 className="item post-title">{title}</h1>
        <p className="item lawyer-name">{lawyerName}</p>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #372e2c;
    color: #aa9999;
    h3 {
      padding: 1rem 0;
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/images/image2.s.jpg");
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
    padding: 5rem 0;

    .item {
      margin: 2rem 0;
    }
    .type {
      color: white;
      font-weight: bold;
      text-decoration: underline;
    }
    .specific-domain {
      color: white;
      font-weight: bold;
    }
    .lawyer-name {
      color: white;
      font-weight: bold;
    }
    .post-title {
      color: white;
    }
  }
`;

export default PostDetailHeader;
