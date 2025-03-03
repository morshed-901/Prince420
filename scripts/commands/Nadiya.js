module.exports.config = {

name: "hadiya",

version: "1.0.0",

permssion: 0,

credits: "EMon-BHai",

prefix:true,

description: "auto reply to hadiya",

category: "noprefix",

usages: "hadiya",

cooldowns: 5,

dependencies: {

"request":"",

"fs-extra":"",

"axios":""

}

};

module.exports.handleEvent = async ({ api, event, Threads,Users}) => {

var id = event.senderID;

var name = await Users.getNameUser(event.senderID);

if (event.body.indexOf("Bikash")==0 || (event.body.indexOf("বিকাশ")==0) || event.body.indexOf("Bikash")==0 ||

event.body.indexOf("বিকাশ")==0 ||

event.body.indexOf("নগদ")==0 ||

event.body.indexOf("Nagad")==0 ||

event.body.indexOf("রকেট")==0 ||

event.body.indexOf("Rocket")==0 ||

event.body.indexOf("Nambar")==0 ||

event.body.indexOf("নাম্বার")==0) {

const axios = global.nodemodule["axios"];

const request = global.nodemodule["request"];

const fs = global.nodemodule["fs-extra"];

var link = [

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

"https://i.imgur.com/rIowT2K.jpeg",

];

var callback = () => api.sendMessage({body:`╔═.✵.═══════════╗\n     👉01615101797👈-!!\n╚═══════════.✵.═╝\n\n✿🦋༎👆প্রিয় সহযোদ্ধা এই যে নেন আপনার নাম্বার👆 অবশ্যই টাকা পাঠানোর পরে স্ক্রিনশট বা শেষের নাম্বার বলবেন। ${name}༎✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`,attachment: fs.createReadStream(__dirname + "/cache/emon.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/emon.jpeg"), event.messageID);

const timeStart = Date.now();

const dcm = process.uptime(); 

var anh = Math.floor(dcm / (60 * 60));

var la = Math.floor((dcm % (60 * 60)) / 60);

var vt = Math.floor(dcm % 60);

const PREFIX = config.PREFIX;

return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/emon.jpeg")).on("close",() => callback());

}

module.exports.languages = {

"vi": {

"on": "Use it the wrong way and then complain",

"off": "Stupid student, used it the wrong way",

"successText": `🧠`,

},

"en": {

"on": "on",

"off": "off",

"successText": "success!",

}

}

module.exports.run = async ({ event, api, Threads, getText }) => {

let { threadID, messageID } = event;

let data = (await Threads.getData(threadID)).data;

if (typeof data["salam"] == "undefined" || data["salam"] == true) data["salam"] = false;

else data["salam"] = true;

await Threads.setData(threadID, {

data

});

global.data.threadData.set(threadID, data);

api.sendMessage(`${(data["salam"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);

} 

}

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

};
