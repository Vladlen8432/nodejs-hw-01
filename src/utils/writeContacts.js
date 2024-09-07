import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
  } catch (error) {
    console.error(`Error writing contacts to ${PATH_DB}:`, error);
    throw error;
  }
};
