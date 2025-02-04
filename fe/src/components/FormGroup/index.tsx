import { Container } from "./styles";

interface FormGroupProps {
    children: React.ReactNode;
    error?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ children, error }) => {
    return (
        <Container>
            {children}
            {error && <small>{error}</small>} 
        </Container>
    );
};

export default FormGroup;
