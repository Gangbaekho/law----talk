import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupPage = (props) => {
  return (
    <StyleContainer>
      <div className="content">
        <div className="banner">
          <h3 className="logo">JINTALK</h3>
          <h3 className="signup">무료회원가입</h3>
        </div>
        <div className="cards">
          <div className="card">
            <h2>
              <span className="highlight">의뢰인</span>이신가요?
            </h2>
            <p>
              로톡 이천여 명 변호사님들 중 나에게 꼭 맞는 변호사를 찾아보세요.
            </p>
            <button className="signup-button">의뢰인으로 가입하기</button>
          </div>
          <div className="card">
            <h2>
              <span className="highlight">변호사</span>이신가요?
            </h2>
            <p>
              로톡의 좋은 변호사가 되어 자신있는 분야의 의뢰인들을 만나보세요.
            </p>
            <button className="signup-button">변호사로 가입하기</button>
          </div>
        </div>
        <div className="footer">
          <ul>
            <li>
              <Link className="link">로그인</Link>
            </li>
            <li>변호사 가입안내</li>
          </ul>
          <p>JINTALK Co., Ltd.</p>
        </div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6;

  .content {
    width: 800px;
    margin: 0 auto;
  }

  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: #222222;
    .logo {
      color: orange;
    }
    .signup {
      color: #aa9995;
      margin-top: 0.5rem;
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    .highlight {
      color: black;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 390px;
      height: 400px;
      background-color: white;
      h2 {
        color: #333333;
      }
      p {
        margin-top: 1rem;
        margin-bottom: 2rem;
        width: 300px;
        text-align: center;
        color: #555555;
        font-weight: bold;
      }
    }
    .signup-button {
      width: 200px;
      border: none;
      background-color: orange;
      height: 40px;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      :focus {
        outline: none;
      }
    }
  }

  .footer {
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        color: #545352;
        font-weight: bold;
        margin: 0 1rem;
        .link {
          color: #545352;
          text-decoration: none;
        }
      }
    }
    p {
      text-align: center;
      margin: 1rem 0;
      font-size: 0.4rem;
      font-weight: bold;
    }
  }
`;

export default SignupPage;
