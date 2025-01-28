import express, { Request, Response } from 'express';
import { Contact } from './Contact';
import SqliteRepository from './SqliteRepository';
import Repository from './Repository';
import { isValidId, isInvalidContactData as isInvalidContactData } from './validationFunctions';

const app = express();
const PORT = 3000;

app.use(express.json());

const repo: Repository = SqliteRepository;

app.get('/contacts', async (req: Request, res: Response) => {
    const contacts = await repo.getContacts();
    res.json(contacts);
});

app.get('/contacts/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isValidId(id, res)) {
        return;
    }

    const contact = await repo.getById(parseInt(id));
    if (!contact) {
        res.status(404).send('Contact not found');
        return;
    }

    res.json(contact);
});

app.post('/contacts', async (req: Request, res: Response) => {
    const body = req.body;
    if (isInvalidContactData(body)) {
        res.status(400).send('Contact data is required');
    }

    const newContact: Contact = {
        ...req.body
    };

    const id = await repo.create(newContact);
    res.status(201).json({ ...newContact, id });
});

app.put('/contacts/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isValidId(id, res)) {
        return;
    }

    const contact = await repo.getById(parseInt(id));

    if (!contact) {
        res.status(404).send('Contact not found');
    }

    await repo.update({ 
        ...req.body, 
        id: parseInt(req.params.id) 
    });

    res.json(202).send(contact);
});

app.delete('/contacts/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isValidId(id, res)) {
        return;
    }

    const contact = await repo.getById(parseInt(id));
    if (!contact) {
        res.status(404).send('Contact not found');
        return;
    }

    await repo.delete(parseInt(req.params.id));
    res.status(204).send();
});

app.listen(PORT, async () => {
    await SqliteRepository.initialize();
    console.log(`Server is running on http://localhost:${PORT}`);
});


