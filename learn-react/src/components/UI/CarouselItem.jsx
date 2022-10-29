import styled from "styled-components";
import yeji from "../../assets/images/yeji.png";

function CarouselItem({ slide }) {
  const { id, url } = slide;
  return (
    <Block>
      <img src={yeji} alt="예지 사진" />
    </Block>
  );
}

const Block = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100vw;
  height: 100%;
  flex-shrink: 0; // 플렉스 컨테이너 요소의 공간이 부족할 때 아이템을 줄이는 비율

  font-size: 3rem;
  font-weight: 700;
`;

export default CarouselItem;
