import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const IntegrateCarouselItem = ({
  mongoLawyer,
  postType,
  id,
  title,
  postImageUrl,
  videoThumbNailUrl,
  itemType,
}) => {
  const history = useHistory();

  console.log(id);

  const clickHandler = () => {
    if (itemType === "post") {
      return history.push(`/post/postIds/${id}`);
    }
    return history.push(`/video/videoIds/${id}`);
  };

  let imageUrl;
  if (postImageUrl) {
    imageUrl = postImageUrl;
  } else {
    imageUrl = videoThumbNailUrl;
  }

  return (
    <StyleContainer onClick={clickHandler}>
      <div className="image-container">{imageUrl}</div>
      {itemType === "post" && <h4>{postType}</h4>}
      <h3>{title}</h3>
      <p>{mongoLawyer.lawyerName}</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 260px;
  cursor: pointer;
  .image-container {
    height: 170px;
    background-image: url("/images/image1.s.jpg");
    background-size: cover;
    background-position: center;
  }

  h4 {
    color: #555;
    margin: 0.5rem 0;
  }
  h3 {
    color: #333;
    margin: 1rem 0;
  }
  p {
    color: #555;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export default IntegrateCarouselItem;
