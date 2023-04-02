import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Balance } from "./Components/Balance/Balance";
import Chart from "./Components/Chart/Chart";
import { theme } from "./theme/theme";

function App() {

  const GlobalStyled = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  `

  const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:${props => props.theme.colors.Cream};
  `
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled/>
        <StyledMain>
          <Balance />
          <Chart />
        </StyledMain>
      </ThemeProvider>
    </>
  );
}

export default App;
