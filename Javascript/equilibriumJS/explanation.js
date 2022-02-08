
window.addEventListener("load", ()=>{
    //height 711, width 1536
    if(window.innerHeight < 700 || window.innerWidth < 1536){
        document.getElementById("exp").style.fontSize = "1.2rem";
    }
});
window.addEventListener("resize", ()=> {
    //height 711, width 1536
    if(window.innerHeight < 700 || window.innerWidth < 1536){
        document.getElementById("exp").style.fontSize = "1.2rem";
    }
    else{
        document.getElementById("exp").style.fontSize = "1.4rem";
    }
});

d3.select("#mySlider").on("input", function()
{
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let button = document.getElementById("button");
    let length = value/(max - min);

    if(length < 1/4)
    {
        if(length < 1/8){
            let image = document.getElementById("img");
            image.src = "images/equilibrium/vectors6.png";
            image.style.height = "65%";
            image.style.top = "3%";
            image.style.left = "30%";
        }
        else if(length < 2/8){
            let image = document.getElementById("img");
            image.src = "images/equilibrium/vectors7.png";
            image.style.height = "65%";
            image.style.top = "3%";
            image.style.left = "30%";
        }
        step2.style.visibility = "hidden";
        step3.style.visibility = "hidden";
        step4.style.visibility = "hidden";
    }
    else if(length > 1/4 && length < 2/4)
    {
        step2.style.visibility = "visible";
        step3.style.visibility = "hidden";
        step4.style.visibility = "hidden";
    }
    else if(length > 2/4 && length < 3/4)
    {
        step2.style.visibility = "visible";
        step3.style.visibility = "visible";
        step4.style.visibility = "hidden";
    }
    else if(length > 3/5)
    {
        button.style.visibility = "visible";
        step2.style.visibility = "visible";
        step3.style.visibility = "visible";
        step4.style.visibility = "visible";
    }
});