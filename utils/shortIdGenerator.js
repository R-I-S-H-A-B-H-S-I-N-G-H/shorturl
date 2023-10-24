const ShortUniqueId = require("short-unique-id");
exports.generateShortId = () => {
	const uid = new ShortUniqueId({ length: 10 });
	return uid.rnd(); // p0ZoB1FwH6
};
