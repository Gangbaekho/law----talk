import React from "react";
import styled from "styled-components";

const MainFooter = (props) => {
  return (
    <MainFooterContainer>
      <div className="flex-container-column">
        <h4>공지사항</h4>
        <p>[안내] 진톡 서비스 점검 안내드립니다.</p>
        <p>[이벤트] 당첨자 결과 발표</p>
        <p>진톡 이용약관 및 개인정보처리 방침 계정</p>
      </div>
      <div className="flex-container-row">
        <ul>
          <li className="title">마이페이지</li>
          <li>내 상담내역</li>
          <li>내 쿠폰함</li>
          <li>회원정보수정</li>
        </ul>
        <ul>
          <li className="title">로톡상담</li>
          <li>15분 전화상담</li>
          <li>20분 영상상담</li>
          <li>30분 방문상담</li>
        </ul>
        <ul>
          <li className="title">고객센터</li>
          <li>공지사항</li>
          <li>자주묻는질문</li>
        </ul>
      </div>
      <div className="information">
        <ul>
          <li>회사소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>법적책임</li>
          <li>운영정책</li>
          <li className="highlight">사진촬영안내</li>
        </ul>
        <p>(주)진톡컴퍼니 이메일:roorooro9933@gmail.com</p>
      </div>
      <div>
        <div className="prize">
          진톡, 2020 소비자가 뽑은 가장 신뢰하는 브랜드 대상 수상.
        </div>
      </div>
      <div className="col-span-2 description">
        (주)진톡컴퍼니는 대한민국 법률시장의 정보비대칭과 불법 법조브로커를
        해소하여 투명하고 공정한 법률시장을 만들기 위해 진톡 서비스를 제공하고
        있습니다. 진톡은 의뢰인회원의 법률상담 내용 및 상담 여부, 법률사건 내용
        및 수임 여부, 변호사회원의 선택 등에 대해 일절 관여하지 않아 변호사법 및
        기타 관련규정을 준수하고 있으며, 변호사회원이 의뢰인회원에게 제공하는
        서비스의 내용과 질에 대해 어떠한 법적책임도 부담하지 않습니다. 또한
        회원간의 예약 및 결제정보의 중개서비스 또는 통신판매중개 시스템을 제공할
        뿐, 통신판매의 당사자가 아닙니다. 모든 법률상담은 각 변호사회원이 직접
        수행하며, 모든 변호사회원은 각 소속 법률사무소, 로펌에서 독립적으로
        법률업무를 수행합니다. 그리고 진톡에 가입한 변호사들 상호간에는 어떠한
        조직적인 관계가 없음을 밝힙니다. 진톡에 표시된 변호사회원의 정보는 해당
        변호사가 직접 제공한 것이며 무단으로 복제, 편집, 전시, 전송, 배포, 판매,
        방송, 공연 등에 이용할 수 없습니다.
      </div>
      <div className="col-span-2 logo">
        <h1>JINTALK</h1>
        <p>(C) JINTALKCompany Co Ltd. ALL RIGHTS RESERVED.</p>
      </div>
    </MainFooterContainer>
  );
};

const MainFooterContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 1fr;
  width: 1080px;
  height: 500px;
  margin: 3rem auto;

  .col-span-2 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  div {
  }

  .flex-container-column {
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

    h4 {
      color: #333333;
    }
    p {
      color: #6f6f6f;
      font-weight: bold;
      font-size: 0.8rem;
      margin: 5px 0;
    }
  }

  .flex-container-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ul {
      list-style: none;
    }

    li {
      color: #6f6f6f;
      font-weight: bold;
      font-size: 0.8rem;
      margin: 5px 0;
    }

    .title {
      color: #333333;
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .information {
    ul {
      list-style: none;
      display: flex;
      margin-bottom: 0.5rem;
      li {
        color: #6f6f6f;
        font-weight: bold;
        font-size: 0.8rem;
        margin-right: 1rem;
      }

      .highlight {
        color: #333333;
      }
    }

    p {
      color: #6f6f6f;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }

  .prize {
    border-top: 1px solid #6f6f6f;
    border-bottom: 1px solid #6f6f6f;
    color: #6f6f6f;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 2rem 0;
  }

  .description {
    font-size: 0.8rem;
    font-weight: bold;
    color: #6f6f6f;
    line-height: 1.4rem;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: orange;
    }
    p {
      font-size: 0.8rem;
      font-weight: bold;
      color: #6f6f6f;
    }
  }
`;

export default MainFooter;
