import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  const handleInput = (e) => {
    // input 관리하는 함수 만들어보기
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickSubmit = (e) => {
    // e.preventDefault() : 요소가 가진 기본 기능을 실행하지 않는다.
    e.preventDefault();
    onCreate(inputs);
    setInputs({
      name: "",
      age: "",
    });
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={inputs.name}
      />
      <input
        type="number"
        onChange={handleInput}
        name="age"
        value={inputs.age}
      />
      <button>등록</button>
    </form>
  );
}

export default AddUser;
