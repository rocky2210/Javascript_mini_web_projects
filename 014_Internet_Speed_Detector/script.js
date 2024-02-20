let startTime, endTime;
let imageSize = 0;
const bitOutput = document.getElementById("bits");
const kbOutput = document.getElementById("kbs");
const mbOutput = document.getElementById("mbs");

async function loadImageAndGetSize(url){
    try{
        const response = await fetch(url, {method: "HEAD"});
        if(!response.ok){
            throw new Error(`Failed to fetch image (status code: ${response.status})`);
        }
        const contentLength = response.headers.get("content-length");
        if(contentLength){
            imageSize = parseFloat(contentLength);
        }else{
            throw new Error("Content-length header not found");
        }

        const image = new Image();
        image.onload = function(){
            endTime = new Date().getTime();
            calculateSpeed();
        };
        image.src = url;
    }catch (error){
        console.error("Error:",error);
    }
}


async function calculateSpeed(){
    try{
        const timeDuration = (endTime - startTime) / 1000;
        const loadedBits = imageSize * 8;
        const speedInBps = (loadedBits / timeDuration).toFixed(2);
        const speedInKbps = (speedInBps / 1024).toFixed(2);
        const speedInMbps = (speedInKbps / 1024).toFixed(2);

        bitOutput.innerHTML = `${speedInBps}`;
        kbOutput.innerHTML = `${speedInKbps}`;
        mbOutput.innerHTML = `${speedInMbps}`;
    } catch (error){
        console.error("Error:",error);
    }
}

document.getElementById("startButton").addEventListener("click",async function(){
    startTime = new Date().getTime();
    await loadImageAndGetSize("https://source.unsplash.com/random?topics=nature");
});