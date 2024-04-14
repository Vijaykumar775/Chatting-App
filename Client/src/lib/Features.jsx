import moment from "moment";

const fileFormat = (url) =>{
    const fileExe = url.split(".").pop();

    if(fileExe === "mp4" || fileExe === "webm" || fileExe === "ogg")
    return "video";

    if(fileExe === "mp3" || fileExe === "wav")
    return "audio";

    if(fileExe === "png" || fileExe === "jpg" || fileExe === "jpeg" || fileExe === "gif")
    return "image";

    return "file";
};

const transforImage = (url="") => url;

const getLastSevenDays = () =>{
    const currentDate = moment();
    const lastDays = [];

    for(let i = 0; i < 7; i++){
        const DayDate = currentDate.clone().subtract(i, "days");
        const dayNow = DayDate.format("dddd");
        lastDays.unshift(dayNow);
    }
    return lastDays;
};


export {fileFormat,transforImage,getLastSevenDays};