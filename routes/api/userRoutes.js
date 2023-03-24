// const router = require('express').Router();
// const {
//   getUsers,
//   getSingleUser,
//   createUser,
//   deleteUser,
//   addAssignment,
//   removeAssignment,
// } = require('../../controllers/userController');

// module.exports = router;


const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/students/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// // /api/user/:userId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);


module.exports = router;
