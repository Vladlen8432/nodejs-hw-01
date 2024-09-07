import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`Total number of contacts: ${count}`);
    return count;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

console.log(await countContacts());
