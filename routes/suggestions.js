const express = require('express');
const router = express.Router();

const trie = require('../assets/trie');

router.get('/', function(req, res, next) {
  res.send(trie.getSuggestions(req.query.mask || ''));
});

module.exports = router;
