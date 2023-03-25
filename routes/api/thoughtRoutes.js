const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  createThoughtwithUser,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:userId
router
  .route('/:userId')
  .post(createThoughtwithUser);

// /api/thoughts/reactions/:thoughtId
router.route('/reactions/:thoughtId').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

