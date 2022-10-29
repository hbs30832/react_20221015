import { useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselWrapper from "./CarouselWrapper";
import Modal from "./Modal";
import ModalBg from "./ModalBg";

const slideList = [
  {
    id: 1,
    url: "../../assets/images/yeji.png",
  },
];

function Carousel() {
  const [modalOn, setModalOn] = useState(true);

  return (
    <>
      <Block>
        <h1>Carousel</h1>
        <CarouselWrapper>
          <CarouselItem slide={slideList[0]} />
        </CarouselWrapper>
      </Block>
      <button onClick={() => setModalOn(true)}>모달 열기</button>
      {modalOn && (
        <ModalBg>
          <Modal
            title="테스트"
            content="테스트용 모달창입니다."
            setModalOn={setModalOn}
          />
        </ModalBg>
      )}
    </>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export default Carousel;
