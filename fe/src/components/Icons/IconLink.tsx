import { ReactNode } from "react";
import { StyledLink } from "./styles";
import { Contact } from "components/ContactCard";

export interface IconLinkProps {
    src: string;
    alt: string;
    to: string;
    contact?: Contact;
    children?: ReactNode;
}
export function IconLink({ src, alt, to, children, contact }: IconLinkProps) {
    return (
        <StyledLink to={to} state={{contact}}>
            <img src={src} alt={alt} />
            {children}
        </StyledLink>
    );
}