const express = require("express")

const { postNewPatient } = require("./controller")

const router = express.Router();

router.post("/", postNewPatient)

module.exports = router;