import React, { useState } from "react";
import styled from "styled-components";
import { graphqlRequest } from "../../utils/fetchApis";

const UserSignup = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = () => {
    const graphqlMutation = {
      query: `
          mutation {
            createUser(userInput:{email:"${userId}",password:"${password}"})
          }
        `,
    };

    graphqlRequest(graphqlMutation)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyleContainer>
      <div className="content">
        <div className="banner">
          <h2 className="logo">JINTALK</h2>
          <h2>Good Lawyers</h2>
          <h4>의뢰인 회원가입</h4>
        </div>
        <div className="form-container">
          <p>계정정보</p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              formHandler();
            }}
          >
            <div>
              <input
                type="text"
                placeholder="이메일"
                onInput={(e) => setUserId(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup-section">
              <button>가입신청</button>
            </div>
          </form>
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
    width: 500px;
    margin: 0 auto;

    .banner {
      background-color: #333333;
      padding: 1rem;
      h2 {
        color: white;
      }
      .logo {
        color: orange;
      }
      h4 {
        margin: 1rem 0;
        color: white;
      }
    }
  }

  .form-container {
    margin: 2rem 0;

    p {
      padding: 0.5rem;
      font-weight: bold;
      background-color: #f9f6f4;
    }
    .form {
      background-color: white;
      div {
        input {
          width: 100%;
          border: none;
          padding: 1rem;
          font-size: 1.2rem;
          :focus {
            outline: none;
          }
        }
      }
    }
  }

  .signup-section {
    background-color: #f9f6f4;
    text-align: center;
    padding: 1rem;
    button {
      width: 80%;
      height: 2rem;
      border: none;
      background-color: orange;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      :focus {
        outline: none;
      }
    }
  }
`;

export default UserSignup;
