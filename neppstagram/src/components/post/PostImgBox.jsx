import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

function PostImgBox() {
  const imgUrls = [
    "https://w.namu.la/s/c2ccec729ca7140681f80154b2271ef78bb0ba2c192390ae3dd39e06cfd7b2e3d891e950eeb63f0aef4e25461528cf1db7be8df22c3cf1680de0bd50b6c27c9728944c2d6ef231a763d0c4da09e693269e89c9ff50560f5fa677b54a19f2fc87",
    "https://m.citybreeze.co.kr/file_data/ctbreeze/2022/04/19/ac007ff0b38eec2ee299876fbc2cbca8.jpg",
    "https://w.namu.la/s/c2ccec729ca7140681f80154b2271ef78bb0ba2c192390ae3dd39e06cfd7b2e3d891e950eeb63f0aef4e25461528cf1db7be8df22c3cf1680de0bd50b6c27c9728944c2d6ef231a763d0c4da09e693269e89c9ff50560f5fa677b54a19f2fc87",
  ];

  const [idx, setIdx] = useState(0);

  const handleIdx = (operator) => {
    if (operator === -1) {
      if (idx > 0) setIdx(idx + operator);
    } else {
      if (idx + operator <= imgUrls.length - 1) setIdx(idx + operator);
    }
  };

  return (
    <Block>
      <ImgList idx={idx}>
        {imgUrls.map((url) => (
          <li>
            <img src={url} alt="as" />
          </li>
        ))}
      </ImgList>
      <Btn onClick={() => handleIdx(-1)}>
        <FaAngleLeft color="rgba(255,255,255,0.3)" />
      </Btn>
      <Btn onClick={() => handleIdx(1)}>
        <FaAngleRight color="rgba(255,255,255,0.3)" />
      </Btn>
    </Block>
  );
}

const Block = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const ImgList = styled.ul`
  display: flex;
  height: 100%;
  transition: transform 0.25s;
  transform: translate(${({ idx }) => idx * -200}px);
  li {
    width: 200px;
    img {
      height: 200%;
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  outline: none;

  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:nth-of-type(1) {
    left: 5px;
  }

  &:nth-of-type(2) {
    right: 5px;
  }
`;

export default PostImgBox;
