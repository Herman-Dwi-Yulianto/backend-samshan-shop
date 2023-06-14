// customerRoutes.js
const express = require('express');
const customerController = require('../controllers/customer_controller');

const router = express.Router();

router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
