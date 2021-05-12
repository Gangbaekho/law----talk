import React from "react";
import styled from "styled-components";

const createPageNumbers = (lastPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {
  const pageNumbers = createPageNumbers(lastPage);

  return (
    <StyleContainer>
      <ul>
        {pageNumbers.map((page) => {
          if (page === currentPage) {
            return (
              <li
                key={page}
                className="highlight"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </li>
            );
          } else {
            return (
              <li key={page} onClick={() => setCurrentPage(page)}>
                {page}
              </li>
            );
          }
        })}
      </ul>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  margin: 3rem 0;
  background-color: #f7f7f7;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      margin: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
    .highlight {
      color: orange;
    }
  }
`;

export default Pagination;
