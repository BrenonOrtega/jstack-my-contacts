import { Container } from "./styles";


export interface IconButtonProps {
    src: string;
    alt: string;
    onClick?: () => void | undefined;
}
;

export function IconButton({ src, alt, onClick }: IconButtonProps) {

    return (
        <Container onClick={onClick}>
            <img src={src} alt={alt} />
        </Container>
    );
}
;
