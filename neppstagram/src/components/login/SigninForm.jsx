import { useEffect, useState } from "react";
import { RedButton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function SigninForm() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isEmpty, setIsEmpty] = useState(true);
  const disabled = isEmpty || inputs.password !== inputs.confirmPassword;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    // for ~ of : 반복 가능한(Iterable) 객체를 순회하며 반복한다.
    // for ~ in : 열거 가능한(emulable) 객체를 순회하며 반복한다.
    for (let value of Object.values(inputs)) {
      if (value.length < 1) {
        setIsEmpty(true);
        return;
      }
    }
    setIsEmpty(false);
  }, [inputs, isEmpty]);

  return (
    <>
      <Title title="Signin" />
      <Form margin="20px 0">
        <Input
          placeholder="이름을 입력해주세요"
          name="username"
          onChange={handleInput}
        />
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          name="password"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
          name="confirmPassword"
          onChange={handleInput}
        />
        <div style={{ marginTop: 50 }}>
          <RedButton style={{ marginTop: "5px" }} disabled={disabled}>
            Signin
          </RedButton>
        </div>
      </Form>
    </>
  );
}

export default SigninForm;
