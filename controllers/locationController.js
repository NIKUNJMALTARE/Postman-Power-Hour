const Data = require('../models/location');

// Create a new data entry
exports.createLocation = async (req, res) => {
    try {
      const newData = new Data(req.body);
      const data = await newData.save();
      res.status(201).json({
        message: "Location created successfully",
        data: data
      });
    } catch (err) {
      res.status(400).json(err);
    }
  };

// Get all data entries
exports.getAllLocations = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a data entry by id
exports.getLocationById = async (req, res) => {
  try {
    const id = req.params.id.trim();
    const data = await Data.findById(id);
    if (!data) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a data entry by ID
exports.updateLocationById = async (req, res) => {
    try {
      const id = req.params.id.trim();
      const data = await Data.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      } else {
        res.status(200).json({
          message: "Location updated successfully",
          data: data
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

// Delete a data entry by ID
exports.deleteLocationById = async (req, res) => {
    try {
      const id = req.params.id.trim();
      console.log('Deleting data entry with ID:', id);
      await Data.findByIdAndDelete(id);
      console.log('Data entry deleted');
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (err) {
      console.error('Error deleting data entry:', err);
      res.status(404).json(err);
    }
  };