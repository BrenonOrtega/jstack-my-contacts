import { Response } from 'express';

const isValidId = (id: string, res: Response): boolean => {
    if (!id) {
        res.status(400).send('Contact id is required');
        return false;
    }

    if (isNaN(parseInt(id))) {
        res.status(400).send('Contact id must be a number');
        return false;
    }

    return true;
};

const isInvalidContactData = (body: any) => {
    return !body
        || !body.name
        || !body.email
        || !body.source
        || !body.phoneNumber;
};

export { isValidId, isInvalidContactData };   