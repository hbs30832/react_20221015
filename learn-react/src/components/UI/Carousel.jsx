import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselWrapper from "./CarouselWrapper";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCallback, useState } from "react";

function Carousel() {
  const [currIdx, setCurrIdx] = useState(0);

  const changeIdx = useCallback(
    (operator) => {
      if (currIdx + operator === -1 || currIdx + operator === 3) return;
      setCurrIdx(currIdx + operator);
    },
    [currIdx]
  );

  return (
    <Block>
      <h1>Carousel</h1>
      <CarouselWrapper>
        <Btn style={{ left: 20 }} onClick={() => changeIdx(-1)}>
          <FaAngleLeft color="#fff" />
        </Btn>
        {new Array(3).fill(1).map((_, idx) => (
          <CarouselItem key={idx} id={idx + 1} />
        ))}
        <Btn style={{ right: 20 }} onClick={() => changeIdx(+1)}>
          <FaAngleRight color="#fff" />
        </Btn>
      </CarouselWrapper>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  cursor: pointer;
`;

export default Carousel;
