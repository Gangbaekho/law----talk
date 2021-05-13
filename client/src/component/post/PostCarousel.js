import React, { useState } from "react";
import styled from "styled-components";

const calculateMaxIndex = (posts) => {
  const length = posts.length;
  if (length >= 3) {
    return 2;
  } else if (length === 0) {
    return -1;
  } else {
    return length - 1;
  }
};

const PostCarousel = (props) => {
  const maxIndex = calculateMaxIndex(props.posts);
  const [index, setIndex] = useState(0);
  const targetPost = props.posts[index];

  const previewButtonHandler = () => {
    if (index === 0) {
      setIndex(maxIndex);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const nextButtonHandler = () => {
    if (index === maxIndex) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  if (maxIndex === -1) {
    return;
  }

  return (
    <StyleContainer>
      <div>
        <button className="button" onClick={() => previewButtonHandler()}>
          &#60;
        </button>
      </div>
      <div className="posts">
        <div className="image-container">{targetPost.postImageUrl}</div>
        <div className="content">
          <h4 className="content__type">{targetPost.postType}</h4>
          <h2 className="content__title">{targetPost.title}</h2>
          <p className="content__description">{targetPost.content}</p>
          <div className="lawyer-info">
            <div className="description">
              <p className="lawyer-name">
                <span className="by">BY</span>{" "}
                {targetPost.mongoLawyer.lawyerName}
              </p>
              <p className="lawyer-title">{targetPost.mongoLawyer.title}</p>
            </div>
            <div className="lawyer-image">
              {targetPost.mongoLawyer.lawyerProfileImageUrl}
            </div>
          </div>
          <div>---</div>
        </div>
      </div>
      <div>
        <button className="button" onClick={() => nextButtonHandler()}>
          &#62;
        </button>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1200px;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .posts {
    width: 1080px;
    height: 460px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 1rem;
    .image-container {
      background-image: url("/images/image1.s.jpg");
      background-size: cover;
      background-position: center;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 4fr 2fr 2fr;
      .content__type {
        color: #b1a1a5;
        text-decoration: underline;
        font-weight: bold;
      }
      .content__description {
        color: #555;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        line-height: 1.7em;
        max-height: 8.5em;
      }
    }
  }
  .button {
    background-color: white;
    border: none;
    font-size: 4rem;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      color: #999;
    }
  }
  .lawyer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .description {
      width: 80%;
    }
    .lawyer-image {
      width: 20%;
    }
  }
  .lawyer-name {
    color: #555;
    font-weight: bold;
    .by {
      color: #b1a1a5;
    }
  }
  .lawyer-title {
    color: #555;
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

export default PostCarousel;
