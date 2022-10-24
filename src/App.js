import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { CiCircleChevRight } from "react-icons/ci";

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
  position: relative;
`;

const BigCircleIcon = styled(CiCircleChevRight)`
  width: 100px;
  height: 100px;
  position: absolute;
  right: -50px;
  top: 50px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BlueBox></BlueBox>
        <RedBox></RedBox>
        <GreenBox>
          <BigCircleIcon />
        </GreenBox>
      </Container>
    </>
  );
}

export default App;
