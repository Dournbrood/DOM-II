// Your code goes here

// Generic query listener template:
// const thingHere = document.querySelector("body");
// thingHere.addEventListener("", (event) => {

// });


//handler count: 3

const everything = document.querySelectorAll("*");
everything.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        element.style.border = "2px solid #c0c0c0";
        element.style.background = "rgba(0, 0, 0, 0.5)";
        element.style.color = "rgba(255, 255, 255, 0.5)";

        //Stops hovering this element from changing EVERYTHING ELSE UNDER IT.
        event.stopPropagation();
    });
});

const allImages = document.querySelectorAll("img");
allImages.forEach((element, index) => {
    element.addEventListener("mouseenter", (event) => {
        element.style.transform = "scale(1.5)";
        element.style.transition = "all 0.2s";
    });
    element.addEventListener("mouseleave", (event) => {
        element.style.transform = "scale(1.0)";
        element.style.transition = "all 0.7s";
    });

    element.addEventListener("drag", (event) => {
        element.style.display = "none";
    });
    element.addEventListener("wheel", (event) => {
        element.style.borderRadius = "50%";
        console.log("Resized!");
    });
});

const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        element.style.color = "white";

        //Stops click on this from turning the body white
        event.stopPropagation();
    });
})

const busHeader = document.querySelector(`.logo-heading`);
busHeader.addEventListener("dblclick", () => {
    busHeader.textContent = "FUN FUN FUN!";
})

const bodySelector = document.querySelector(`body`)
bodySelector.addEventListener("keydown", () => {
    bodySelector.style.background = "black";
});
bodySelector.addEventListener("click", () => {
    bodySelector.style.background = "white";
});

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
    console.log("stopped the link");
    event.preventDefault();
})
