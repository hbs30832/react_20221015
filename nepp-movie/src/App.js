import MovieHeader from "./components/movie/MovieHeader";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import styled from "styled-components";
import Home from "./components/pages/Home";
// import Post from "./components/practice/api/Post";
import Login from "./components/practice/api/Login";
import SignUp from "./components/practice/api/SignUp";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  a {
    color : inherit;
    text-decoration : none;
  }
`;

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      {/* <MovieHeader /> */}
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="tv" element={<TV />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </MainBlock>
    </div>
  );
}

const MainBlock = styled.main`
  /* padding: 50px 100px; */s
`;

export default App;
