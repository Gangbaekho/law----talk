import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = (props) => {
  return (
    <StyleContainer>
      <div className="content">
        <div className="login-section">
          <div>
            <Link className="link"> &#60; 로톡으로</Link>
          </div>
          <h1>
            LOGIN<span className="dot">.</span>
          </h1>
          <div>
            <p className="dummy"> &#60; 로톡으로</p>
          </div>
        </div>
        <div className="form-section">
          <ul className="flex-container">
            <li>로그인</li>
            <li>변호사로 로그인</li>
          </ul>
          <form className="login-form">
            <div>
              <input type="text" placeholder="아이디" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
            </div>
            <div className="erase">
              <button className="login-button">로그인</button>
            </div>
          </form>
        </div>
        <div className="signup-section">
          <div>
            <Link to="/signup" className="signup">
              회원가입
            </Link>
          </div>
          <div>
            <Link className="company">JINTALK CO.Ltd</Link>
          </div>
        </div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 60vh;
    margin: 0 auto;
  }

  .login-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 3rem;
    }
  }

  .link {
    color: #999;
    text-decoration: none;
    font-weight: bold;
  }

  .dummy {
    color: #e6e6e6;
  }

  .dot {
    color: orange;
    font-size: 3rem;
  }

  .form-section {
    background-color: white;
    margin-top: 3rem;
  }

  .flex-container {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;

    li {
      width: 250px;
      text-align: center;
      font-size: 1.2rem;
      padding: 1rem 0;
    }
  }

  .login-form {
    .erase {
      border-bottom: none;
    }
    div {
      border-bottom: 1px solid #e6e6e6;
      text-align: center;
      margin: 3rem auto;
      width: 80%;
      padding: 0.5rem;

      input {
        width: 100%;
        height: 2rem;
        border: none;
        font-size: 1.5rem;

        :focus {
          outline: none;
        }
      }
    }
  }

  .login-button {
    background-color: orange;
    border: none;
    width: 80%;
    height: 3rem;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;

    :focus {
      outline: none;
    }
  }

  .signup-section {
    text-align: center;
    div {
      margin: 1rem 0;
    }
    .signup {
      color: orange;
      font-weight: bold;
      text-decoration: none;
    }
    .company {
      color: #999;
      font-weight: bold;
      text-decoration: none;
      font-size: 0.5rem;
    }
  }
`;

export default LoginPage;
