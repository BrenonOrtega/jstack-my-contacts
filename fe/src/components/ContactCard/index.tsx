import { IconLink } from "../Icons/IconLink";
import { IconButton } from "../Icons/IconButton";
import { Container, ContactHeader, ContactInfo, Buttons } from "./styles";
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { useState } from "react";

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  source: string;
}

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [disabled, setDisabled] = useState(true);

  function toggleDisabled() {
    setDisabled((state) => !state);
  }

  const handleDelete = () => {
    toggleDisabled();
  };

  const handleModalCancel = (): void => {
    toggleDisabled();
  };

  return (
    <>
      <Modal
        disabled={disabled}
        title="Deletar Usuario"
        message={`Essa acao deletara o usuario ${contact.name}. Deseja continuar?`}
        $isDangerous
        onCancelClick={handleModalCancel}
      >
        <Button $isDangerous>Deletar</Button>
      </Modal>
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
          <IconLink
            src={editIcon}
            alt="edit button"
            to={`edit/${contact.id}`}
            contact={contact}
          />
          <IconButton
            src={deleteIcon}
            alt="delete Button"
            onClick={handleDelete}
          />
        </Buttons>
      </Container>
    </>
  );
}
