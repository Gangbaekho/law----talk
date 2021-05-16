import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const filters = {
  regions: [
    "전국",
    "서울",
    "인천/경기",
    "충청도",
    "경상도",
    "전라도",
    "강원도",
    "제주도",
  ],
  genders: ["남+여", "남", "여"],
  authentications: ["전체", "전문 인증 변호사만"],
  certifications: [
    "전체",
    "세무사",
    "노무사",
    "변리사",
    "관세사",
    "회계사",
    "행정사",
    "공인중개사",
    "감정평가사",
    "의사",
    "한의사",
    "약사",
  ],
  experiences: [
    "전체",
    "판사 경험",
    "검사 경험",
    "경찰 경험",
    "국선변호인 경험",
    "대형 로펌 경험",
    "사업 경험",
    "기업 근무 경험",
    "공직 근무 경험",
  ],
  languages: ["전체", "영어", "중국어", "일본어", "기타"],
};

const LawyerFilter = (props) => {
  const [region, setRegion] = useState("전국");
  const [gender, setGender] = useState("남+여");
  const [authentication, setAuthentication] = useState("전체");
  const [certification, setCertification] = useState("전체");
  const [experience, setExperience] = useState("전체");
  const [language, setLanguage] = useState("전체");

  const applyButtonHandler = () => {
    console.log({
      region,
      gender,
      authentication,
      certification,
      experience,
      language,
    });
  };

  return (
    <StyleContainer>
      <div className="header">
        <h4>상세필터</h4>
        <div>
          <button>초기화 하기</button>
        </div>
      </div>
      <div className="filters">
        <div className="filter">
          <h4>지역</h4>
          <ul>
            {filters.regions.map((r) => (
              <li
                key={v4()}
                className={`${region === r && "underline"}`}
                onClick={() => setRegion(r)}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter">
          <h4>성별</h4>
          <ul>
            {filters.genders.map((g) => (
              <li
                key={v4()}
                className={`${gender === g && "underline"}`}
                onClick={() => setGender(g)}
              >
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter">
          <h4>
            전문
            <br />
            인증
          </h4>
          <ul>
            {filters.authentications.map((a) => (
              <li
                key={v4()}
                className={`${authentication === a && "underline"}`}
                onClick={() => setAuthentication(a)}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter">
          <h4>
            특수
            <br />
            자격
          </h4>
          <ul>
            {filters.certifications.map((c) => (
              <li
                key={v4()}
                className={`${certification === c && "underline"}`}
                onClick={() => setCertification(c)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter">
          <h4>경험</h4>
          <ul>
            {filters.experiences.map((e) => (
              <li
                key={v4()}
                className={`${experience === e && "underline"}`}
                onClick={() => setExperience(e)}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter">
          <h4>
            가능
            <br />
            언어
          </h4>
          <ul>
            {filters.languages.map((l) => (
              <li
                key={v4()}
                className={`${language === l && "underline"}`}
                onClick={() => setLanguage(l)}
              >
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="apply">
        <button onClick={applyButtonHandler}>적용하기</button>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 340px;
  padding: 0 2rem;
  border-left: 1px solid #aaa;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      border: none;
      background-color: white;
      color: #5a5d5a;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .filters {
    display: flex;
    flex-direction: column;
    .filter {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin: 1rem 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        li {
          margin: 0 0.5rem;
          margin-bottom: 0.5rem;
          color: #5a5d5a;
          font-weight: bold;
          cursor: pointer;
        }
        .underline {
          text-decoration: underline;
          color: orange;
          font-weight: bold;
        }
      }
    }
  }
  .apply {
    button {
      width: 100%;
      border: 1px solid orange;
      background-color: white;
      color: orange;
      font-size: 1.2rem;
      padding: 1rem 0;
      cursor: pointer;
    }
  }
`;

export default LawyerFilter;
