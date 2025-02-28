module.exports.config = {
  name: "Morshed",
  version: "1.0.0",
  permission: 2,
  credits: "Nayan",
  description: "Sex pic",
  prefix: true, 
  category: "user", 
  usages: "Morshed",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://i.postimg.cc/wTZJ1Yvb/images-1-29.jpg",
    
    "https://i.postimg.cc/ZRN79xP1/97420.jpg",

    "https://i.postimg.cc/tCB54cQs/27712360-320x180.jpg",

    "https://i.postimg.cc/Mp4myjGx/556-contact-01749889097.jpg",

    "https://i.postimg.cc/rm2GHXWP/images-2022-08-16-T112453-202.jpg", ];
   var callback = () => api.sendMessage({body:`ভদ্র ছেলে😋+\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
