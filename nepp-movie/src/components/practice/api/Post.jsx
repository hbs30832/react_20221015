import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

function Post() {
  const [title, setTitle] = useState("");
  const [state, fetchData] = useAsync(async () =>
    axios.get("v1/search/book.json", {
      params: {
        query: "javascript",
      },
      headers: {
        "X-Naver-Client-Id": "G0dP7iaR9t1olMt1uyB5",
        "X-Naver-Client-Secret": "PkaWVU9gdP",
      },
    })
  );

  const onSubmit = async () => {
    let result = await axios.post("http://localhost:8000/posts", {
      title,
      author: "hbs",
    });
    console.log(result);
    fetchData();
  };

  const onDelete = async (id) => {
    let result = await axios.delete("http://localhost:8000/posts/" + id);
    console.log(result);
    fetchData();
  };

  const { loading, data: postList, error } = state;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!postList) return;

  return (
    <div>
      <h3>Practice API</h3>
      {/* <input type="number" onChange={(e) => setId(e.target.value)} /> */}
      <input
        type="text"
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button onClick={onSubmit}>등록</button>
      {postList.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </li>
      ))}
    </div>
  );
}

export default Post;
