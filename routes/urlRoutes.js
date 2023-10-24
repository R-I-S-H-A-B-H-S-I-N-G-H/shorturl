const express = require("express");
const router = express.Router();
const {
	createUrl,
	getByShortId,
	aboutUrlApi,
} = require("../controllers/urlController");

router.get("/:shortId", getByShortId);
router.post("", createUrl).get("", aboutUrlApi);

module.exports = router;
