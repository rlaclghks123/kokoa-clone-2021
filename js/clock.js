const clock = document.querySelector("#clock");

function handleClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hour}:${minutes}`;
}

handleClock();
setInterval(handleClock, 1000);