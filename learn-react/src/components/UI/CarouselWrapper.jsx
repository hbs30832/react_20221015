import styled from "styled-components";

function CarouselWrapper({ children }) {
  return (
    <Block>
      <ul>{children}</ul>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 300px;

  border: 3px solid red;
  overflow: hidden;

  position: relative;

  ul {
    display: flex;
    height: 100%;
  }
`;

export default CarouselWrapper;
