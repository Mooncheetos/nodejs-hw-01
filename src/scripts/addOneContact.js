import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        const contacts = JSON.parse(data);
        const oneContact = createFakeContact();
        const newContacts = [...contacts, oneContact];

        await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
    } catch (error) {
        console.error(error.message);
    }
};

await addOneContact();
