import React from "react";
import styled from "styled-components";

const ConsultingDetailAnswer = (props) => {
  return (
    <StyleContainer>
      <div className="flex-container">
        <div className="lawyer">
          <div className="image-container">이미지</div>
          <div className="info">
            <div>
              <span className="lawyer-name">이성준 변호사</span>&nbsp;
              <span className="company-name">법무법인 다움</span>
            </div>
            <div className="phone-number">050-7725-9272</div>
          </div>
        </div>
        <div className="consulting">
          상담
          <br />
          예약
        </div>
      </div>
      <hr />
      <p className="content">
        1. 위 정보만으로 판단할 때 귀하의 아버지와 누나가 상속포기를 하면 귀하가
        고인의 재산을 단독상속 할 수 있습니다. 2. 귀하의 아버지와 누나가 고인의
        최후 주소지 관할 가정법원(또는 법원)에 상속포기심판청구를 하셔야 합니다.
        3. 피상속인의 퇴직금을 법정상속인이 수령하였다면 상속재산을 처분한
        것으로 간주되어 상속포기를 할 수 없습니다. 현재 상태에서는 귀하의
        아버지가 법정상속인이므로 아버지가 수령하실 수 있으나 퇴직금을
        수령하시면 상속포기를 할 수 없게되고 고인의 상속재산은 아버지가
        단독상속한 것으로 됩니다. 구체적인 상담을 원하시면 프로필상의 연락처로
        연락주십시오.
      </p>
      <p className="time">5시간 전 작성됨</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  border: 2px solid black;
  background-color: white;

  .flex-container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lawyer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin: 0 0.5rem;
      }
    }
  }

  .lawyer-name {
    font-weight: bold;
    font-size: 1rem;
  }
  .company-name {
    color: #555;
    font-weight: bold;
  }
  .phone-number {
    color: #555;
    font-weight: bold;
  }
  .consulting {
    background-color: orange;
    padding: 1rem;
    color: white;
    font-weight: bold;
  }
  .content {
    line-height: 1.5rem;
    font-weight: bold;
    color: #555;
  }
  .time {
    font-weight: bold;
    color: #555;
    margin: 1rem 0;
  }
`;

export default ConsultingDetailAnswer;
