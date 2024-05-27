import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB);
        let contactsArray = JSON.parse(data);

        for (let i = 0; i < number; i += 1) {
            contactsArray.push(createFakeContact());
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contactsArray, null, 2));
    } catch (error) {
        console.error(error.message);
    }
};

await generateContacts(5);
