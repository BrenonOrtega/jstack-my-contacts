import Container from "./styles";
import ContactForm from "../../components/ContactForm";

import { useLocation } from "react-router";
import { Contact } from "../../components/ContactCard";
import BackLink from "../../components/BackLink";

interface EditContactProps {
    contact?: Contact;
}

export default function EditContact() {
    const location = useLocation();
    const { contact } = location.state as EditContactProps || {};

    const name = contact?.name;
    return (
        <>
        <Container>
            <span>
                <BackLink />
                Editando <strong>{name}</strong>
            </span>
        </Container>
            <ContactForm contact={contact}></ContactForm>
        </>
    );
}