import axios from "axios";

const token = process.env.REACT_APP_TMDB_TOKEN;

export const movie_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `bearer ${token}`,
  },
});

export async function getPopularMovieList() {
  let result = await movie_instance.get("movie/popular");
  return result;
}
