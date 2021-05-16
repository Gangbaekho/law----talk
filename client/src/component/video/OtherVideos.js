import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OtherVideos = ({ lawyerName, videos }) => {
  return (
    <StyleContainer>
      <p className="title">
        <span className="highlight">{lawyerName}</span>가 작성한 다른 비디오
      </p>
      <ul className="content">
        {videos.map((video) => (
          <li key={video.id}>
            <Link to={`/video/videoIds/${video.id}`} className="link">
              {video.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  margin: 2rem auto;
  border: 1px solid #fcfbf9;
  .title {
    padding: 1rem;
    background-color: #fcfbf9;
    .highlight {
      font-weight: bold;
    }
  }
  .content {
    margin: 0 1rem;
    padding: 1rem;
    li {
      margin: 1rem 0;
      .link {
        color: #555;
        font-weight: bold;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default OtherVideos;
