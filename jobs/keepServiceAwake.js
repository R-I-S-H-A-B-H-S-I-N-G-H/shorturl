const schedule = require("node-schedule");
const axios = require("axios");
exports.ping = () =>
	schedule.scheduleJob("* */15 * * * *", async () => {
		const res = await axios.get(process.env.PING_ENDPOINT);
		console.log("PINGING THE API TO KEEP ALIVE!!", res.status);
	});
