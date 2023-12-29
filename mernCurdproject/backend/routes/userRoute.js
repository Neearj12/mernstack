const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/usermodel');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// Get All user
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Get Single User  
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const foundUser = await User.findById({ _id: id });
        if (!foundUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(foundUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete({ _id: id });
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
//Put Patch

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const {name,email,age}=req.body;
  try {
      const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true,} );

      res.status(200).json(updateUser);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;
