import { Container, StyledLine, Orderer } from "./styles";
import ContactCard, { Contact } from "../ContactCard";
import arrow from "../../assets/images/arrow.svg";
import { useState } from "react";
import { Link } from "react-router";

export default function ContactList() {
    const miranha = {
        id: 1,
        name: "Peter Parker",
        phone: "+55 (11) 999999999",
        email: "miranha@oscorp.com",
        source: "Linkedin"
    };
    let contacts: Contact[] = [
        miranha,
        { ...miranha, name: "Pedro Prado", id: 2, },
        { ...miranha, name: "Milhas Morais", id: 3, },
    ];

    const [ascending, setAscending] = useState(false);
    const toggleOrdering = () => {
    contacts = contacts.sort((a, b) => !ascending 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name));

        setAscending(x => !x);
    };
    return (
        <>
            <Container>
                <span>3 Contatos</span>
                <Link to="new-contact">Novo Contato</Link>
            </Container>
            <StyledLine />
            <Orderer onClick={toggleOrdering}>
                Name
                <img 
                    src={arrow} 
                    alt="arrow up" 
                    className={(ascending ? "orderer-clicked" : "")} 
                />
            </Orderer>
            {contacts.map(c => <ContactCard key={c.id} contact={c} />)}
        </>

    );
}