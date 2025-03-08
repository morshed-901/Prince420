module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Nayan",
	description: "notify leave.",
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "গ্রুপ থেকে না বলে চলে যাওয়া ব্যক্তিদের আর এড করা যাবে না 🤢" : "ইসলামিয়া ফাউন্ডেশনের কৃতপক্ষ";
	const path = join(__dirname, "nayan", "leaveGif");
	const gifPath = join(path, `l.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "ইসলামিয়া ফাউন্ডেশন এর নিয়ম না মানার কারণে {name} কে গ্রুপ থেকে বহিষ্কার করা হলো  .\n\n{type} " : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
