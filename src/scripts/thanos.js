import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        let contacts = JSON.parse(data);

        for (let i = 0; i < contacts.length; i += 1) {
            if (Math.random() >= 0.5) {
                contacts.splice(i, 1);
                i -= 1;
            }
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.error(error.message);
    }
};

await thanos();
