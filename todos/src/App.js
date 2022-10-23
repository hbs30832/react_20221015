import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import useTodoReducer from "./hooks/useTodoReducer";

// 글로벌 스타일 적용
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;

function App() {
  const [todos] = useTodoReducer();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={{
          colors: {
            main: "#53b5ed",
          },
        }}
      >
        <AppBlock>
          <TodoTemplate name="sasdsad">
            <TodoHeader />
            <TodoList todos={todos} />
            <TodoInput />
          </TodoTemplate>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f4f4f4;
`;

export default App;
