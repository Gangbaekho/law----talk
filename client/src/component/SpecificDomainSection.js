import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SpecificDomainSection = (props) => {
  return (
    <SpecificDomainSectionContainer>
      <h2>분야로 변호사를 찾으세요.</h2>
      <ul>
        <li>
          <Link className="specific-domain-icon">이혼</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">상속</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">성범죄</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">건설/부동산</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">재산범죄</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">기업일반</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li>
          <Link className="specific-domain-icon">형사기타</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
        <li className="search">
          <Link className="specific-domain-icon">분야찾기</Link>
          <div>변호사 100명</div>
          <div>사례 1000건</div>
        </li>
      </ul>
    </SpecificDomainSectionContainer>
  );
};

const SpecificDomainSectionContainer = styled.div`
  width: 1080px;
  margin: 2rem auto;

  ul {
    display: flex;
    list-style: none;
    margin: 1rem auto;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 135px;
      height: 135px;
      border: 2px solid black;
      border-radius: 100%;

      div {
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.5);
        margin: 2px 0;
      }
    }

    .specific-domain-icon {
      color: black;
      text-decoration: none;
    }

    .search {
      background-color: orange;
    }
  }
`;

export default SpecificDomainSection;
