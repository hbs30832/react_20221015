import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

function Post() {
  const [title, setTitle] = useState("javascript");
  const [state, fetchData] = useAsync(async () =>
    axios.get("v1/search/book.json", {
      params: {
        query: title,
        display: 100,
      },
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_ClientId,
        "X-Naver-Client-Secret": process.env.REACT_APP_ClientSecret,
      },
    })
  );

  const onSubmit = async () => {
    let result = await fetchData();
    console.log(result);
  };

  const onDelete = async (id) => {
    let result = await axios.delete("http://localhost:8000/posts/" + id);
    console.log(result);
    fetchData();
  };

  const { loading, data, error } = state;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return;

  return (
    <div>
      <h3>Practice API</h3>
      {/* <input type="number" onChange={(e) => setId(e.target.value)} /> */}
      <input
        type="text"
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button onClick={onSubmit}>등록</button>
      {data.items.map((item) => (
        <li key={item.isbn}>
          {item.title}({item.author})
          <img src={item.image} alt="" />
        </li>
      ))}
    </div>
  );
}

export default Post;
