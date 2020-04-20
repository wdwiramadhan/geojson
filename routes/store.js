const express = require('express');
const router = express.Router();
const store = require('../controllers/stores');

router.get('/', store.index);
router.post('/', store.store);
router.get('/:id', store.show);
router.put('/:id', store.update);
router.delete('/:id', store.destroy);

module.exports = router

