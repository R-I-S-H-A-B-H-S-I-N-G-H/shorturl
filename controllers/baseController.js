exports.createOne = (Model) => async (req, res, next) => {
	try {
		const doc = await Model.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				doc,
			},
		});
	} catch (error) {
		next(error);
	}
};
