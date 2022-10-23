import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const BlueBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  border: 1px solid black;
`;
const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  border: 1px solid black;
`;

const GreenBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  border: 1px solid black;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BlueBox></BlueBox>
        <RedBox></RedBox>
        <GreenBox></GreenBox>
      </Container>
    </>
  );
}

export default App;
