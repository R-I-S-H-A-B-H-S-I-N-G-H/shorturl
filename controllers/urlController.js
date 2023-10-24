const URL = require("../models/urlModel");
const { generateShortId } = require("../utils/shortIdGenerator");

exports.aboutUrlApi = (req, res, next) => {
	res.json({
		Title: "This is a Url shortner APi",
		EndPoints: [
			{
				method: "POST",
				path: "",
				action: "create short url",
			},
			{
				method: "GET",
				path: "/:shortId",
				action: "redirect to the original url",
			},
		],
	});
};

exports.getByShortId = async (req, res, next) => {
	try {
		const query = URL.where({ shortId: req.params.shortId });
		const urlResp = await query.findOne();
		const redirectURL = urlResp.redirectURL;
		res.redirect(redirectURL);
	} catch (error) {
		console.error("SHORT ID DOESNT EXIST", error);
		return res.status(500).json({ error: "SHORT ID DOESNT EXIST" });
	}
};

exports.createUrl = async (req, res, next) => {
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
};
