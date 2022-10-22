import { useRef, useState } from "react";
import AddUser from "./AddUser";

function countUser(arr) {
  console.log(arr.length);
}

function UserList({ userList, onToggle, onRemove }) {
  return (
    <div>
      <h2>유저 목록</h2>
      <ul>
        {userList.map((user) => (
          // props 통해서 User 컴포넌트에 값 전달해서 반영하기
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function User({ user, onRemove, onToggle }) {
  const { name, age, id, active } = user;
  return (
    <li>
      <span
        style={{ color: active && "blue", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {name}({age}세)
      </span>
      <button
        onClick={() => {
          // 이벤트 전파(버블링)를 막는다.
          // e.stopPropagation();
          onRemove(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default UserList;
