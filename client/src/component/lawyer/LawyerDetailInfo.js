import React from "react";
import styled from "styled-components";

const LawyerDetailInfo = (props) => {
  return (
    <StyleContainer>
      <h1 className="title">[상담사례 7500건]실제 사례를 통한 현실적인조력</h1>
      <div className="info">
        <div className="introduction">
          <h3>최한겨례 변호사</h3>
          <h4>법무법인 명재</h4>
          <p>
            서울특별시 서초구 서초대로 240 (서초동, 서초동 동일하이빌) 법무법인
            명재
          </p>
          <p>050-7725-2085</p>
        </div>
        <div className="detail">
          <div className="grid-container">
            <p className="bold">분야</p>
            <p>이혼,상속,성범죄,형사기타,건설/부동산,지적재산권,민사소송절차</p>
          </div>
          <div className="grid-container">
            <p className="bold">경력</p>
            <p>법률사무소 명재 대표변호사</p>
          </div>
          <div className="grid-container">
            <p className="bold">자격</p>
            <p>2016년 변호사자격 취득</p>
          </div>
          <div className="grid-container">
            <p className="bold">학력</p>
            <p>연세대학교 법학전문대학원 석사 졸업</p>
          </div>
          <div className="grid-container">
            <p className="bold">가격</p>
            <p>가격정보 8개 있음.</p>
          </div>
        </div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  margin: 3rem 0;
  .title {
    font-size: 3rem;
  }
  .info {
    display: grid;
    margin: 2rem 0;
    grid-template-columns: 1fr 1fr;
    color: #555;
    font-weight: bold;
  }
  .introduction {
    h3 {
      margin-bottom: 1rem;
    }
    p {
      margin: 0.5rem 0;
    }
  }
  .grid-container {
    display: grid;
    margin: 0.5rem 0;
    grid-template-columns: 1fr 6fr;
    color: #555;
    font-weight: bold;
    .bold {
      color: black;
    }
  }
`;

export default LawyerDetailInfo;
