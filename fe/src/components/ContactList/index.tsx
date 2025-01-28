import { Container, StyledLine, Orderer } from "./styles";
import ContactComponent, { Contact } from "../Contact";
import arrowUp from "../../assets/images/arrowUp.svg";
import { useState } from "react";

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
            : b.name.localeCompare(a.name))

        setAscending(x => !x);
    };
    return (
        <>
            <Container>
                <span>3 Contatos</span>
                <a href="#">Novo Contato</a>
            </Container>
            <StyledLine />
            <Orderer onClick={toggleOrdering}>
                Name
                <img 
                    src={arrowUp} 
                    alt="arrow up" 
                    className={(ascending ? "orderer-clicked" : "")} 
                />
            </Orderer>
            {contacts.map(c => <ContactComponent key={c.id} contact={c} />)}
        </>

    );
}