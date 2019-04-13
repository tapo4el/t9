const express = require('express');
const router = express.Router();

const trie = require('../assets/trie');

router.get('/:mask', function(req, res, next) {
  res.send(trie.getSuggestions(req.params.mask));
});

module.exports = router;
