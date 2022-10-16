import "./App.css";
import InputText from "./components/InputText";
import UserList from "./components/UserList";

// 컴포넌트 : 하나의 조각

// const boxStyle = { backgroundColor: "red", color: "#fff" };

function App() {
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

      <UserList />
    </>
  );
}

export default App;
