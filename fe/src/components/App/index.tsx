import DefaultTheme from "../../assets/styles/themes/DefaultTheme";
import GlobalStyles from "../../assets/styles/GlobalStyle";
import Header from "../Header";
import Routes from "../../routes";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme} >
      <GlobalStyles />
      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
