import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ConsultingSection = (props) => {
  return (
    <ConsultingSectionContainer>
      <div className="consulting-section-content">
        <h2>상황에 맞게 변호사와 상담하세요.</h2>
        <div className="consultings">
          <div className="consulting">
            <div className="image-container image1">
              <h3>
                빠르고 부담없이 <br /> 상담하고 싶을 때
              </h3>
            </div>
            <div className="description">
              <h4>15분 전화상담.</h4>
              <p>
                예약한 시간에 변호사로부터 전화가 옵니다. 2만원 ~ 5만원 사이의
                부담없는 상담비로 빠르게 해결책을 문의하세요.
              </p>
              <Link className="link">분야찾고 예약하기 &#62;</Link>
            </div>
          </div>
          <div className="consulting">
            <div className="image-container image2">
              <h3>
                영상으로 상황과 감정을 <br /> 공유하고 싶을 때
              </h3>
            </div>
            <div className="description">
              <h4>15분 전화상담.</h4>
              <p>
                예약한 시간에 변호사로부터 전화가 옵니다. 2만원 ~ 5만원 사이의
                부담없는 상담비로 빠르게 해결책을 문의하세요.
              </p>
              <Link className="link">분야찾고 예약하기 &#62;</Link>
            </div>
          </div>
          <div className="consulting">
            <div className="image-container image3">
              <h3>
                직접 만나서 <br /> 상담하고 싶을 때
              </h3>
            </div>
            <div className="description">
              <h4>15분 전화상담.</h4>
              <p>
                예약한 시간에 변호사로부터 전화가 옵니다. 2만원 ~ 5만원 사이의
                부담없는 상담비로 빠르게 해결책을 문의하세요.
              </p>
              <Link className="link">분야찾고 예약하기 &#62;</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="online-consulting">
          <div className="description">
            <h4>온라인상담</h4>
            <p>
              여러 변호사의 초기의견이 궁금하신가요? 상담글 쓰고 답변받으세요.
              단, 내용은 익명으로 로톡에 등록됩니다.
            </p>
            <Link className="link">상담글 쓰기 &#62;</Link>
          </div>
        </div>
      </div>
    </ConsultingSectionContainer>
  );
};

const ConsultingSectionContainer = styled.div`
  background-color: #222222;
  padding: 5rem 0;

  .consulting-section-content {
    width: 1080px;
    margin: 0 auto;

    h2 {
      color: #ffffff;
    }
  }

  .consultings {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    margin: 2rem 0;
  }

  .consulting {
    width: 340px;
  }

  .image-container {
    width: 340px;
    height: 340px;
    background-color: white;

    h3 {
      padding: 3rem 0;
      text-align: center;
    }
  }

  .description {
    color: #cfcfc4;
    margin: 1rem 0;

    p {
      margin: 1rem 0;
    }
  }

  .link {
    color: #f84518;
    font-weight: bold;
  }

  .online-consulting {
    padding: 1rem 0;
  }

  .image1 {
    background-image: url("/images/bg1.jpg");
    background-repeat: none;
    background-size: cover;
    background-position: center;
  }

  .image2 {
    background-image: url("/images/bg1.jpg");
    background-repeat: none;
    background-size: cover;
    background-position: center;
  }

  .image3 {
    background-image: url("/images/bg1.jpg");
    background-repeat: none;
    background-size: cover;
    background-position: center;
  }
`;

export default ConsultingSection;
