import { createPortal } from "react-dom";
import { Overlay, Main, Footer } from "./styles";

interface ModalProps {
  title: string;
  message: string;
  $isDangerous: boolean;
  disabled?: boolean;
  onCancelClick?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  $isDangerous,
  children,
  disabled,
  onCancelClick
}) => {
  return createPortal(
    <Overlay disabled={disabled}>
      <div>
        <Main $isDangerous={$isDangerous}>{title}</Main>
        <p>{message}</p>
        <Footer>
          <button className="cancel" onClick={onCancelClick}>
            <u>Cancelar</u>
          </button>
          {children}
        </Footer>
      </div>
    </Overlay>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
