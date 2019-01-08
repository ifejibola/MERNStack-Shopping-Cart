//Defining router here for readability/cleaner code..could have been placed in the server.js file.
const express = require('express');
const router = express.Router();

//Item Model, needed to make querys like item.find, item.save
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public 
router.get('/', (request, response) =>{
    //sorted by date
    Item.find()
        .sort({ date: -1})
        .then(items => response.json(items))
});

// @route   POST api/items
// @desc    Create A Post
// @access  Public 
router.post('/', (request, response) =>{
    //Create new inventory item
    const newItem = new Item({
        //get name of new item from form?? (body-parser enables the use of this code..),
            //no need to retrieve date because its done automatically (default: Date.now in Models/Item.js file )
        name: request.body.name
    });
    //Save Item,
    newItem.save().then(item => response.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public 
router.delete('/:id', (request, response) =>{
    Item.findById(request.params.id)
        .then(item => item.remove().then(()=> response.json({success: true})))
        .catch(err => response.status(404).json({success: false}));

});


module.exports = router;

