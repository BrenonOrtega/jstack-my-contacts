import { IconLink } from "../Icons/IconLink";
import { IconButton } from "../Icons/IconButton";
import { Container, ContactHeader, ContactInfo, Buttons } from "./styles";
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

export interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
    source: string;
};

export default function ContactComponentCard({ contact }: { contact: Contact }) {
    return (
        <>
            <Container>
                <div>
                    <ContactHeader>
                        <strong>{contact.name}</strong>
                        <strong className="contact-source">{contact.source}</strong>
                    </ContactHeader>
                    <ContactInfo>
                        <small>{contact.email}</small>
                    </ContactInfo>
                    <ContactInfo>
                        <small>{contact.phone}</small>
                    </ContactInfo>
                </div>
                <Buttons>
                    <IconLink src={editIcon} alt="edit button" to={`edit/${contact.id}`} contact={contact} />
                    <IconButton src={deleteIcon} alt="delete Button" />
                </Buttons>
            </Container>
        </>
    );
}