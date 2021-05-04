import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <MainHeaderContainer>
      <HambergerMenu>
        <div className="hamberger-line"></div>
        <div className="hamberger-line"></div>
        <div className="hamberger-line"></div>
      </HambergerMenu>
      <Logo>JINTALK</Logo>
      <GeneralMenu>
        <ul>
          <li>쿠폰함</li>
          <li>
            <Link to="/login" className="link">
              로그인/가입
            </Link>
          </li>
          <li>변호사찾기</li>
        </ul>
      </GeneralMenu>
      <ConsultingMenu>
        <ul>
          <li>
            <Link to="/login" className="link">
              15분 <br /> 전화상담
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              20분 <br /> 영상상담
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              30분 <br /> 방문상담
            </Link>
          </li>
        </ul>
      </ConsultingMenu>
      <KeywordForm>
        <input placeholder="법률키워드를 검색하세요." />
      </KeywordForm>
      <Prediction>
        <Link to="/login" className="link">
          진톡 형량예측
        </Link>
      </Prediction>
    </MainHeaderContainer>
  );
};

const MainHeaderContainer = styled.div`
  width: 1080px;
  height: 200px;
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Logo = styled.div`
  color: orange;
  font-size: 40px;
  font-weight: bold;
  place-self: center;
`;

const HambergerMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .hamberger-line {
  }
`;

const GeneralMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 1rem;
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
      font-size: 0.8rem;
    }

    .link {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ConsultingMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 1rem;
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
      font-size: 0.8rem;
    }

    .link {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Prediction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .link {
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
  }

  .link:hover {
    color: blue;
  }
`;

const KeywordForm = styled.form`
  place-self: center;
  text-align: center;
  width: 100%;
  input {
    margin: 0 auto;
    width: 80%;
    height: 3rem;
    font-size: 1rem;
  }
`;

export default MainHeader;
