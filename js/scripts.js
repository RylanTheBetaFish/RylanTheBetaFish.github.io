const hero = document.querySelector(".bubbleZone");

// mouse bubbles
hero.addEventListener("mousemove", (e) => {
    let bubbleSize = Math.random() * 10;
    let bubbleOffset = (Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1);
    let bubbleAnimationNumber = Math.floor(Math.random() * 4);
    let bubbleAnimationSelections = ["rise", "rise2", "rise3", "rise4"]
    let x = e.pageX;
    let y = e.pageY;
    // console.log(x + ", " + y);
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.classList.add(bubbleAnimationSelections[bubbleAnimationNumber])
    bubble.style.position = "absolute";
    bubble.style.left = x + bubbleOffset + "px";
    bubble.style.top = y + "px";
    bubble.style.width = bubbleSize + "px";
    bubble.style.height = bubbleSize + "px";
    bubble.style.backgroundSize = "cover";
    bubble.style.zIndex = "2";
    document.body.appendChild(bubble);
    setTimeout(() => {
        document.body.removeChild(bubble);
    }, 300);
});

// hero bottom bubbles
let bottomBubbles = () => {
    const width = window.innerWidth * 0.99;
    let bubbleSize = Math.random() * 40;
    let bubbleAnimationNumber = Math.floor(Math.random() * 4);
    let bubbleAnimationSelections = ["riseBottom", "rise2Bottom", "rise3Bottom", "rise4Bottom"]
    let x = (Math.random() * (width - 40));
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.classList.add(bubbleAnimationSelections[bubbleAnimationNumber])
    bubble.style.position = "absolute";
    bubble.style.transform = "translate(-100%, -100%)";
    bubble.style.left = x + "px";
    bubble.style.bottom = "0px";
    bubble.style.width = bubbleSize + "px";
    bubble.style.height = bubbleSize + "px";
    bubble.style.backgroundSize = "cover";
    bubble.style.zI2ex
    hero.appendChild(bubble);
    setTimeout(() => {
        hero.removeChild(bubble);
    }, 5000);
};

setInterval(bottomBubbles, 50);