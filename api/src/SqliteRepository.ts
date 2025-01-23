import path from 'path';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import Repository from './Repository';
import { Contact } from './Contact';

let db: Database | undefined;
const connect = (): Promise<Database> => open({
    filename: path.join(__dirname, 'contacts.db'),
    driver: sqlite3.Database
});

const initializeDb = async () => {
    db = await connect();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            source TEXT NOT NULL,
            phoneNumber TEXT NOT NULL
        )
    `);
};

const SqliteRepository: Repository = {
    initialize: initializeDb,

    getContacts: async function (): Promise<Contact[]> {
        await ensureInitialized();
        return db!.all<Contact[]>('SELECT * FROM contacts');
    },

    getById: async function (id: number): Promise<Contact | undefined> {
        await ensureInitialized();
        return db!.get<Contact>('SELECT * FROM contacts where id = ?', id);
    },

    create: async function (contact: Contact): Promise<Number> {
        await ensureInitialized();
        const result = await db!.run(
            'INSERT INTO contacts (name, email, source, phoneNumber) VALUES (?, ?, ?, ?)',
            contact.name, contact.email, contact.source, contact.phoneNumber
        );

        return result.lastID
            ? result.lastID
            : (() => { throw new Error('Failed to insert contact'); })();
    },

    update: async function (contact: Contact): Promise<void> {
        await ensureInitialized();
        const result = await db!.run(
            'UPDATE contacts SET name = ?, email = ?, source = ?, phoneNumber = ? WHERE id = ?',
            contact.name, contact.email, contact.source, contact.phoneNumber, contact.id
        );

        if (result.changes === 0) {
            throw new Error('Failed to update contact');
        }
    },
    
    delete: async function (id: number): Promise<void> {
        await ensureInitialized();
        const result = await db!.run('DELETE FROM contacts WHERE id = ?', id);

        if (result.changes === 0) {
            throw new Error('Failed to delete contact');
        }
    }
};


const ensureInitialized = async (): Promise<void> => {
    if (!db) {
        db = await connect();
    }
}

export default SqliteRepository;