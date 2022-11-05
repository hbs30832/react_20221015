import styled from "styled-components";
import InputBox from "../../movie/InputBox";
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import FormBox from "./FormBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiHeart } from "react-icons/bi";

import { useCookies } from "react-cookie";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);

  // 토큰 가지고 있는지 확인
  useEffect(() => {
    console.log(cookies["access-token"]);
    if (cookies["access-token"]) {
      navigate("/post");
    }
  }, [cookies, navigate]);

  const { email, password } = inputs;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();

    try {
      let result = await axios.post("http://101.101.218.43/users/login", {
        email,
        password,
      });
      setCookie("access-token", result.data.data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      navigate("/post");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormBox onSubmit={onSignIn}>
      <h3>Login</h3>
      <InputWrapper>
        <InputBox
          type="email"
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <InputBox
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          onChange={handleInput}
        />
      </InputWrapper>
      <Button text="Sign In" />
      <Button
        text="Sign Up"
        bgColor="#bbb"
        onClick={() => navigate("/signUp")}
      />
    </FormBox>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export default Login;
