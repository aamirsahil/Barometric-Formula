var page = 1;
var img = ["vectors1","vectors2","vectors3","vectors4","vectors5","vectors6","vectors7","vectors"];
var textExp = ["We consider one pressure element",
            "It has a weight due to gravity",
            "It is also acted on by pressure from top",
            "Hence force from top is sum of these 2 forces",
            "This is countered from pressure from bottom",
            "This is countered from pressure from bottom",
            "At equilibrium the sum is zero",
            "Which result sus th final expression"];
$('#borderTop').on('click', () => {
    if(page < 2) return;
    page--;
    buttonState();
    displayImg("top");
    displayText("top");
});
$('#borderBottom').on('click', () => {
    if(page > 7) return;
    page++;
    buttonState();
    displayImg("down");
    displayText("down");
});

function displayImg(button){
    let image = document.getElementById("img");
    image.src = "images/equilibrium/" + img[page - 1] + ".png";
    switch(page){
        case 1:
            setDim(image, "40%", "20%", "10%");
            break;
        case 2:
            setDim(image, "40%", "20%", "10%");
            break;
        case 3:
            setDim(image, "60%", "5%", "10%");
            break;
        case 4:
            setDim(image, "65%", "2%", "15%");
            break;
        case 5:
            setDim(image, "65%", "3%", "15%");
            break;
        case 6:
            setDim(image, "65%", "3%", "15%");
            break;
        case 7:
            setDim(image, "65%", "3%", "15%");
            break;
        case 8:
            setDim(image, "60%", "5%", "20%");
            break;
    }
}

function setDim(image, height, top, left){
    image.style.height = height;
    image.style.top = top;
    image.style.left = left;
}

function displayText(button){
    document.getElementById("description").innerHTML = textExp[page - 1];
}

function buttonState(){
    let buttonTop = document.getElementById("borderTop");
    let buttonBottom = document.getElementById("borderBottom");
    switch (page)
    {
        case 1:
            buttonTop.style.opacity = "50%";
            buttonBottom.style.opacity = "100%";
            break;
       case 2:
       case 3:
       case 4:
       case 5:
       case 6:
       case 7:
            buttonTop.style.opacity = "100%";
            buttonBottom.style.opacity = "100%";
            break;
       case 8:
            buttonTop.style.opacity = "100%";
            buttonBottom.style.opacity = "50%";
            break;
    }
}