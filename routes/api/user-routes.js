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
    
} = require('../../controllers/user-controller');

// Route to: /api/users <GET, POST>
router.route('/').get(getAllUsers).post(createUsers);

// Route to: /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// Route to: /api/users/:userId/friends/:friendId <POST, DELETE>
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// Module export router
module.exports = router;