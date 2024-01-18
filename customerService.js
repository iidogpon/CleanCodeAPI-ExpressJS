const customerData = require('./customerData');
const crypto = require('crypto');

const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toISOString();
}

const getCustomers = async () => {
    const customers = await customerData.readCustomers();
    return customers.sort((a, b) => a.timestamp - b.timestamp);
}

const addCustomer = async (customerInput) => {
    const customers = await getCustomers();
    const newId = crypto.randomBytes(4).toString('hex');
    const timestamp = Date.now();
    const formattedTimestamp = formatTimestamp(timestamp);
    const newCustomer = { id: newId, ...customerInput, timestamp: formattedTimestamp };
    customers.push(newCustomer);
    await customerData.writeCustomers(customers);
    return newCustomer;
}

const updateCustomer = async (id, updateData) => {
    let customers = await getCustomers();
    const customerIndex = customers.findIndex(customer => customer.id.toString() === id);

    if (customerIndex >= 0) {
        customers[customerIndex] = { ...customers[customerIndex], ...updateData };
        await customerData.writeCustomers(customers);
        return customers[customerIndex];
    } else {
        throw new Error('Customer not found');
    }
}


const deleteCustomer = async (id) => {
    let customers = await getCustomers();
    const customerExists = customers.some(customer => customer.id.toString() === id);

    if (customerExists) {
        customers = customers.filter(customer => customer.id.toString() !== id);
        await customerData.writeCustomers(customers);
        return;
    } else {
        throw new Error('Customer not found');
    }
}

module.exports = {
    getCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer
};
