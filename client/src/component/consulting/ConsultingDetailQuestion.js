import React from "react";
import styled from "styled-components";

const ConsultingDetailQuestion = (props) => {
  return (
    <StyleContainer>
      <div className="space-between">
        <h4>상속</h4>
        <p>조회수</p>
      </div>
      <h2 className="title">법정 상속인 순위 변경이 가능한가요?</h2>
      <p className="content">
        형님이 갑작스레 사망 하셨습니다.아직 미혼으로 법정 상속은 직계존속
        아버지, 그 다음 형제 자매인 누나와 저의 순으로 알고 있습니다. 아버지께서
        모든걸 저에게 넘기고 일 처리를 부탁하셔서 법정상속인 순위를 변경하고자
        합니다. 이때 아버지와 누님께서 상속포기를 하게 되면 동생인 제가 상속인이
        되는지 궁금합니다. 그리고 상속포기는 어떻게 처리 되는지 궁금합니다. 1.
        법정상속인 변경 가능 유무(후순위로) 2. 법정상속인 변경 절차. 3. 퇴직금
        수령후 상속인 변경 가능 유무
      </p>
      <p className="time">6시간 전 작성됨.</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 2rem 0;
  border: 2px solid black;

  .space-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cfd0cf;
    font-weight: bold;
  }
  .title {
    font-size: 3rem;
    margin: 1rem 0;
  }
  .content {
    color: #555;
    font-weight: bold;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
  .time {
    color: #cfd0cf;
    font-weight: bold;
  }
`;

export default ConsultingDetailQuestion;
