const hoverEmoji = document.querySelector("#hoverEmogi");
const hideEmoji = document.querySelector("#emogi");


function handleEmoji(){
    hideEmoji.classList.remove("hide");
}

hoverEmoji.addEventListener("mouseover", handleEmoji);

function outEmoji(){
    hideEmoji.classList.remove("hide");
    hideEmoji.classList.add("hide");
}

hoverEmoji.addEventListener("mouseout", outEmoji);