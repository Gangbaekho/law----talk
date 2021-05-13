import React from "react";
import styled from "styled-components";

const PostCarousel = (props) => {
  return (
    <StyleContainer>
      <div>
        <button className="button"> &#60;</button>
      </div>
      <div className="posts">
        <div className="image-container">이미지</div>
        <div className="content">
          <h4 className="content__type">법률가이드</h4>
          <h2 className="content__title">이혼재산분할 포기하지 말고 쟁취를</h2>
          <p className="content__description">
            최근에 들어 이혼에 돌입하는 부부의 수가 정말 많이 늘어나고 있습니다.
            서로 잘 협의하여 원만하게 끝맺음을 하면 좋겠지만, 각자의 생각과
            나아갈 방향이 다르기 때문에 여기서 많은 갈등과 복잡한 문제들을 겪게
            됩니다. 이혼재산분할 또한 원활하게 결혼 생활을 끝내기 어렵게 하는
            요인인데요. 대부분 가산배분과 양육권 등의 분쟁에서 서로 합의를 보지
            못하기 때문에 소송 이혼으로 들어가게 됩니다.대부분 가산배분과 양육권
            등의 분쟁에서 서로 합의를 보지 못하기 때문에 소송 이혼으로 들어가게
            됩니다.대부분 가산배분과 양육권 등의 분쟁에서 서로 합의를 보지
            못하기 때문에 소송 이혼으로 들어가게 됩니다.
          </p>
          <div className="lawyer-info">
            <div className="description">
              <p className="lawyer-name">
                <span className="by">BY</span> 이주연 변호사
              </p>
              <p className="lawyer-title">변호사 소개</p>
            </div>
            <div className="lawyer-image">이미지</div>
          </div>
          <div>---</div>
        </div>
      </div>
      <div>
        <button className="button">&#62;</button>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1200px;
  border: 2px solid black;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .posts {
    width: 1080px;
    height: 460px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: 3fr 2fr;
    .content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 4fr 2fr 2fr;
      .content__type {
        color: #b1a1a5;
        text-decoration: underline;
        font-weight: bold;
      }
      .content__description {
        color: #555;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        line-height: 1.7em;
        max-height: 8.5em;
      }
    }
  }
  .button {
    background-color: white;
    border: none;
    font-size: 4rem;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      color: #999;
    }
  }
  .lawyer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .description {
      width: 80%;
    }
    .lawyer-image {
      width: 20%;
    }
  }
  .lawyer-name {
    color: #555;
    font-weight: bold;
    .by {
      color: #b1a1a5;
    }
  }
  .lawyer-title {
    color: #555;
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

export default PostCarousel;
