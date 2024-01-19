// src/data/customerData.js
import fs from 'fs-extra';

const CUSTOMERS_FILE = './customers.txt';

export const readCustomers = async () => {
    try {
        const data = await fs.readFile(CUSTOMERS_FILE, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        throw new Error('Error reading customers from file');
    }
}

export const writeCustomers = async (customers) => {
    try {
        await fs.writeFile(CUSTOMERS_FILE, JSON.stringify(customers, null, 2), 'utf-8');
    } catch (error) {
        throw new Error('Error writing customers to file');
    }
}
