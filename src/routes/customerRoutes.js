// src/routes/customerRoutes.js
import express from 'express';
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from '../services/customerService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const customers = await getCustomers();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const newCustomer = await addCustomer(req.body);
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedCustomer = await updateCustomer(req.params.id, req.body);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteCustomer(req.params.id);
        res.status(200).send({ message: `Customer with id ${req.params.id} is deleted` });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

export default router;
