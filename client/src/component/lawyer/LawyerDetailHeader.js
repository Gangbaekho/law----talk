import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const menuList = ["변호사홈", "변호사정보", "법률사례", "의뢰인후기"];

const LawyerDetailHeader = (props) => {
  const [clickedMenu, setClickedMenu] = useState("변호사홈");
  return (
    <StyleContainer>
      <ul className="navigation">
        {menuList.map((menu) => (
          <li
            key={v4()}
            className={`${clickedMenu === menu && "clicked"}`}
            onClick={() => {
              setClickedMenu(menu);
            }}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div className="consulting">상담예약</div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 840px;
  padding: 3rem 0;
  border: 2px solid black;

  .navigation {
    display: flex;
    list-style: none;

    .clicked {
      color: black;
    }
    li {
      color: #cac8ca;
      font-weight: bold;
      margin-right: 2rem;
      font-size: 1.2rem;
      cursor: pointer;

      :hover {
        color: black;
      }
    }
  }

  .consulting {
    color: #cac8ca;
    font-weight: bold;

    font-size: 1.2rem;
    cursor: pointer;
    :hover {
      color: orange;
    }
  }
`;

export default LawyerDetailHeader;
