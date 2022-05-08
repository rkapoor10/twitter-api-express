const express = require('express')
const { getPosts } = require('../controller/post.controller')
const router = express.Router()


router.route("/posts").get(getPosts)

module.exports = router