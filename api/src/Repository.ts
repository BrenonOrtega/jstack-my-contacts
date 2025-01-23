import { Contact } from './Contact';

export default interface Repository {
    initialize(): Promise<void>;
    getContacts(): Promise<Contact[]>;
    getById(id: number): Promise<Contact | undefined>;
    create(contact: Contact): Promise<Number>;
    update(contact: Contact): Promise<void>;
    delete(id: number): Promise<void>;
}
