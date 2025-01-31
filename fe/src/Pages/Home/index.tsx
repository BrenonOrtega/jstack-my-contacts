import Modal from "../../components/Modal";
import ContactList from "../../components/ContactList";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";

export default function Home() {

    const isDangerous = true;
    return (
        <>
            <Modal
                title="Deletar Usuario"
                message="Essa acao deletara o usuario {usuario}. Deseja continuar?"
                isDangerous={isDangerous}>
                <Button isDangerous={isDangerous}>Deletar</Button>
            </Modal>
            <SearchBar />
            <ContactList />
        </>
    );
}