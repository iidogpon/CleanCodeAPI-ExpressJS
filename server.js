const express = require('express');
const customerRoutes = require('./customerRoutes');

const app = express();
app.use(express.json());

app.use('/customers', customerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
