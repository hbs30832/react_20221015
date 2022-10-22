import { useRef, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import UserList from "./components/UserList";

// 컴포넌트 : 하나의 조각

// const boxStyle = { backgroundColor: "red", color: "#fff" };

function App() {
  const [isRender, setIsRender] = useState(true);

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "황보석",
      age: 30,
      active: true,
    },
    {
      id: 2,
      name: "김정철",
      age: 30,
      active: false,
    },
    {
      id: 3,
      name: "김관훈",
      age: 30,
      active: false,
    },
  ]);

  // useRef로 값을 관리하면 값이 변경되어도 리렌더링이 일어나지 않는다.
  //    => 특정값을 기억해놓고 사용한다(렌더링과 상관없이 변경 가능한 값).
  const nextId = useRef(4);

  const onCreate = (inputs) => {
    const { name, age } = inputs;
    setUserList(
      // Array.prototype.concat : 인자로 전달된 배열 혹은 원소를 합쳐서 새로운 배열 반환
      userList.concat({
        id: nextId.current,
        name,
        age,
      })
    );

    nextId.current++;
  };

  const onRemove = (id) => {
    // window.confirm : 확인버튼 클릭시 true 반환
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) setUserList(userList.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUserList(
      userList.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  // const text = "리액트";
  return (
    /*
      jsx : JS로 UI를 작성할 때 직관적으로 표현하기 위해서 사용.

      1. 닫혀 있는 태그를 사용해야한다.
      2. 하나의 태그로 감싸야 된다. => <></>(Fragment)를 통해서 부모 요소 없이 감쌀 수 있다.
      3. JS 값을 포함시킬 때는 {}안에 표현식을 넣는다.
      4. 클래스는 className라는 속성으로 사용한다.
      5. 스타일 적용은 style 속성에 객체를 넣는다. => CSS 속성명 카멜케이스로 작성한다.
    */

    <>
      {/* <MyComponent title="Component" active />
      <MyComponent />
      <div className="box" style={boxStyle}>
        {text}
      </div> */}

      {/* <InputText /> */}

      <AddUser onCreate={onCreate} />
      <UserList userList={userList} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
