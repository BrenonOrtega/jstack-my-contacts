import { Link } from "react-router";
import { Container } from "./styles";
import arrow from "../../assets/images/arrow.svg";

const BackLink = () =>
    <Container>
        <Link to="/">
            <div>
                <img src={arrow} alt="back arrow" />
                voltar
            </div>
        </Link>
    </Container>;

export default BackLink;
