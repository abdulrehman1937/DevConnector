const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
// @route   POST api/users
// @des     Regiter User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check(
      'password',
      'Please enter a password of minimum 8 characters'
    ).isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
      res.send('User route');
    } catch (err) {}
  }
);
module.exports = router;
