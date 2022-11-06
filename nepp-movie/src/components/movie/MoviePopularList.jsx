import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { getPopularMovieList } from "../../utils/movie_api";
import MovieDetail from "./MovieDetail";
import MoviePopularItem from "./MoviePopularItem";
import Title from "./Title";

function MoviePopularList() {
  const [poularList, setPopularList] = useState([]);
  useEffect(() => {
    getPopularMovieList().then((res) => setPopularList(res.data.results));
  }, []);

  console.log(poularList);
  return (
    <div>
      <Title title="인기 영화" />
      <MovieListBlock>
        {poularList.map((movie) => (
          <MoviePopularItem key={movie.id} movie={movie} />
        ))}
      </MovieListBlock>
    </div>
  );
}

const MovieListBlock = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export default MoviePopularList;
