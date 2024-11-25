const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Health Check Endpoint
app.get('/', (req, res) => {
    res.send('Loyalty Program Backend is up and running!');
});

// Add Customer Registration Endpoint
app.post('/register-customer', (req, res) => {
    const { phoneNumber, name } = req.body;
    if (!phoneNumber || !name) {
        return res.status(400).json({ message: 'Phone number and name are required' });
    }
    // Save customer details to database (placeholder logic)
    console.log('Customer Registered:', req.body);
    res.status(201).json({ message: 'Customer registered successfully' });
});

// Record Transactions and Update Points
app.post('/record-transaction', (req, res) => {
    const { phoneNumber, amount } = req.body;
    if (!phoneNumber || !amount) {
        return res.status(400).json({ message: 'Phone number and transaction amount are required' });
    }
    // Logic to calculate and update loyalty points
    const pointsEarned = Math.floor(amount / 10); // 1 point per $10 spent
    console.log(`Points for ${phoneNumber}: ${pointsEarned}`);
    res.status(200).json({ message: 'Transaction recorded', points: pointsEarned });
});

// Get Customer Details Endpoint
app.get('/customer/:phoneNumber', (req, res) => {
    const { phoneNumber } = req.params;
    // Fetch customer details from database (placeholder logic)
    console.log(`Fetching details for customer: ${phoneNumber}`);
    res.status(200).json({ phoneNumber, points: 120, name: 'John Doe' });
});

// Start Server
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
