import React from "react";
import { Overlay, Main, Footer } from "./styles";

interface ModalProps {
    title: string;
    message: string;
    isDangerous: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, message, isDangerous, children }: ModalProps) => {
    return (
        <Overlay>
            <div>
                <Main isDangerous={isDangerous}>{title}</Main>
                <p>{message}</p>
                <Footer>
                    <button className="cancel"><u>Cancelar</u></button>
                    {children}
                </Footer>
            </div>
        </Overlay>
    );
};

export default Modal;