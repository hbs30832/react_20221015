import styled from "styled-components";
import MovieNav from "./MovieNav";
import InputBox from "./InputBox";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { getSearch } from "../../utils/movie_api";
import SearchBox from "./SearchBox";

function MovieHeader() {
  return (
    <HeaderBlock>
      <Logo>Nepp Movie</Logo>
      <MovieNav />
      <SearchBox />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 100px;

  border-bottom: 1px solid black;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export default MovieHeader;
