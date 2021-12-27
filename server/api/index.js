"use strict";
const router = require("express").Router();

router.use('/users',require('./users'));
router.use('/products',require('./products'))
router.use('/order',require('./order'))


router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});
module.exports = router