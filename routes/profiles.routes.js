const express = require("express")
const { getProfiles, getProfile } = require("../controller/profiles.controller")

const router = express.Router()


router.route("/profiles").get(getProfiles)
router.route("/profiles/:profileId").get(getProfile)

module.exports = router