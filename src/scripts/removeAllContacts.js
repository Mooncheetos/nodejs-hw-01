import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        const contacts = JSON.parse(data);
        const onDelete = contacts.splice(contacts.length);

        await fs.writeFile(PATH_DB, JSON.stringify(onDelete));
    } catch (error) {
        console.error(error.message);
    }
};

await removeAllContacts();
