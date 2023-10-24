const schedule = require("node-schedule");
exports.ping = () =>
	schedule.scheduleJob("*/10 * * * * *", async () => {
		const res = await fetch(`http://localhost:${process.env.PORT}`);
		console.log("PINGING THE API TO KEEP ALIVE!!", res.status);
	});
