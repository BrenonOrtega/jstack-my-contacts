//import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "../../assets/styles/themes/DefaultTheme";
import GlobalStyles from "../../assets/styles/GlobalStyle";
import Header from "../Header";
import { Container } from "./styles";
import ContactList from "../ContactList";

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme} >
      <GlobalStyles />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </ThemeProvider>
  );
}
