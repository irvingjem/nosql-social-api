// Require express router
const router = require('express').Router();

// Gets from the controllers
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

// Module export router
module.exports = router;