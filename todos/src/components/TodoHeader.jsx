import styled from "styled-components";

function TodoHeader() {
  const dateStr = new Date().toLocaleDateString("ko-KR", { dateStyle: "full" });

  return (
    <HeaderBlock>
      <DateText>{dateStr}</DateText>
      <CountText>완료 : 0/2</CountText>
      <StatusBar>
        <Percentage>50%</Percentage>
      </StatusBar>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #e6e6e6;
`;

const DateText = styled.h2`
  font-size: 1.2rem;
`;

const CountText = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #bbb;
`;

const StatusBar = styled.div`
  height: 12px;
  margin-top: 5px;

  background-color: #bbb;
  border-radius: 10px;

  font-size: 0.5rem;
  text-align: center;
  line-height: 12px;
  color: #fff;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main};

    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Percentage = styled.span`
  position: relative;
  z-index: 10;
`;

export default TodoHeader;
