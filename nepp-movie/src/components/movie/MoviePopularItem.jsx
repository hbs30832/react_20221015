import styled from "styled-components";

function MoviePopularItem({ movie }) {
  const { title, poster_path, release_date } = movie;
  const url = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <ItemBlock>
      <ImgBox>
        <img src={url} alt={movie.title} />
      </ImgBox>
      <TitleBox>
        <strong>{release_date}</strong>
        <h4>{title}</h4>
      </TitleBox>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  list-style: none;
`;

const TitleBox = styled.div`
  text-align: center;
  strong {
    font-size: 12px;
    color: #ccc;
  }
  h4 {
    font-weight: 700;
    margin-top: 4px;
  }
`;

const ImgBox = styled.div`
  width: 150px;
  height: 200px;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

export default MoviePopularItem;
