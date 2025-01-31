import { Container } from "./styles.tsx";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts Logo" width="201px" />
    </Container>
  );
}