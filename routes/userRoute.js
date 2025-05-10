const { fetchUser, postUser } = require('../controllers/userController');

const router = require('express').Router();

router.route("/users").get(fetchUser).post(postUser);