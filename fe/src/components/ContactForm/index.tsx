import { Contact } from "../ContactCard";
import { Container } from "./styles";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import FormGroup from "../../components/FormGroup";

interface ContactFormProps {
    contact?: Contact;
    buttonLabel: string;
};

export default function ContactForm({ contact, buttonLabel }: ContactFormProps) {
    const { name, email, phone, source } = contact || {};
    const invalid = true;
    return (
        <Container>
            <FormGroup>
                <Input placeholder="Nome" type="text" defaultValue={name}  />
            </FormGroup>
            <FormGroup error="Formato de email invalido.">
                <Input placeholder="Email" type="email" defaultValue={email} />
            </FormGroup>
            <FormGroup>
                <Input placeholder="Telefone" type="tel" defaultValue={phone} error/>
            </FormGroup>
            <FormGroup>
                <Select defaultValue={source}>
                    <option value="linkedin">Linkedin</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                </Select>
            </FormGroup>
            <Button disabled={invalid}>{buttonLabel}</Button>
        </Container >
    );
}
