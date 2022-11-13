import styled from "styled-components";

function PostImgBox() {
  return (
    <Block>
      <ImgList>
        <li>
          <img
            src="https://w.namu.la/s/c2ccec729ca7140681f80154b2271ef78bb0ba2c192390ae3dd39e06cfd7b2e3d891e950eeb63f0aef4e25461528cf1db7be8df22c3cf1680de0bd50b6c27c9728944c2d6ef231a763d0c4da09e693269e89c9ff50560f5fa677b54a19f2fc87"
            alt=""
          />
        </li>
      </ImgList>
    </Block>
  );
}

const Block = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ImgList = styled.ul`
  display: flex;
  li {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export default PostImgBox;
