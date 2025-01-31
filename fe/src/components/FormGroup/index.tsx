import { Container } from "./styles";

interface FormGroupProps {
    children: React.ReactNode;
    error?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ children, error }) => {
    return (
        <Container>
            {children}
            {error && <span className="error">{error}</span>}
        </Container>
    );
};

export default FormGroup;