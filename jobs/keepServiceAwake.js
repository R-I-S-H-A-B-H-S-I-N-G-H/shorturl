const schedule = require("node-schedule");
const axios = require("axios");
exports.ping = () =>
	schedule.scheduleJob("*/10 * * * * *", async () => {
		const res = await axios.get(`http://localhost:${process.env.PORT}`);
		console.log("PINGING THE API TO KEEP ALIVE!!", res.status);
	});
