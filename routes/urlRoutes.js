const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");
const { generateShortId } = require("../utils/shortIdGenerator");
const URL = require("../models/urlModel");

router.post("", async (req, res, next) => {
	try {
		url = await URL.create({
			shortId: generateShortId(),
			redirectURL: req.body.redirectURL,
			visitHistory: [],
		});
		res.json({ url });
	} catch (error) {
		console.error("Failed to generate short URL:", error);
		return res.status(500).json({ error: "Failed to generate short URL" });
	}
});

router.get("/:shortId", async (req, res, next) => {
	try {
		const query = URL.where({ shortId: req.params.shortId });
		const urlResp = await query.findOne();
		const redirectURL = urlResp.redirectURL;
		res.redirect(redirectURL);
	} catch (error) {
		console.error("SHORT ID DOESNT EXIST", error);
		return res.status(500).json({ error: "SHORT ID DOESNT EXIST" });
	}
});

module.exports = router;
