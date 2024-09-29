const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Create a new data entry
router.post('/add', locationController.createLocation);

// Get all data entries
router.get('/get', locationController.getAllLocations);

// Get a single data entry by ID
router.get('/:id', locationController.getLocationById);

// Update a data entry by ID
router.put('/:id', locationController.updateLocationById);

// Delete a data entry by ID
router.delete('/:id', locationController.deleteLocationById);

module.exports = router;