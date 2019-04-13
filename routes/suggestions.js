const express = require('express');
const router = express.Router();

router.get('/:mask', function(req, res, next) {
  res.send(`you request ${req.params.mask}`);
});

module.exports = router;
