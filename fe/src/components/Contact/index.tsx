import IconButton from "../IconButton";
import { Container, ContactHeader, ContactInfo, Buttons } from "./styles"
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

export interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
    source: string;
};

export default function ContactComponent({ contact }: { contact: Contact }) {
    return (
        <>
            <Container>
                <div>
                    <ContactHeader>
                        <span>{contact.name}</span>
                        <span className="contact-source">
                            {contact.source}
                        </span>
                    </ContactHeader>
                    <ContactInfo>
                        <text>{contact.email}</text>
                    </ContactInfo>
                    <ContactInfo>
                        <text>{contact.phone}</text>
                    </ContactInfo>
                </div>
                <Buttons>
                    <IconButton src={editIcon} alt="edit Button" />
                    <IconButton src={deleteIcon} alt="delete Button" />
                </Buttons>
            </Container>
        </>
    );
}