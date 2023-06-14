// customerController.js
const Customer = require('../models/customer');

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;
    const customer = await Customer.create({ name, email });
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const customer = await Customer.findByPk(id);
    if (customer) {
      await customer.update({ name, email });
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    if (customer) {
      await customer.destroy();
      res.json({ message: 'Customer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
