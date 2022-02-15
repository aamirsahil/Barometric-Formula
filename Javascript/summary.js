var text = ["We started with an real life example which we needed to model to obtain relation between relevant quantities.",
"We idealize the system by stripping away unnecessary components",
"Now we partition the system the system to smaller components that all act similiarly",
"Now we introduce geomertic element to better understand the system",
"We now describe the system using algebra."];

$("#arc-slider").roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 0,
    startAngle: 45,
    editableTooltip: true,
    radius: 350,
    width: 6,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value + " %";
    },
    drag: function(args){
        let text = document.getElementById("text");

        changeText(args.value/100);
        changeImg(args.value/100);
    }
});
function opacity(len,min,max)
{
    if(len > max)
        return 0;
    if(len < min)
        return 100;
    let slope = -100/(max - min);
    let opacity = slope*(len - max);
    return opacity;
}
function changeText(len){
    let desc = document.getElementById("text");
    if(len < 2/100){
        desc.innerHTML = text[0];
    }
    else if(len > 2/100 && len < 25/100){
        desc.innerHTML = text[1];
    }
    else if(len > 25/100 && len < 50/100){
        desc.innerHTML = text[2];
    }
    else if(len > 50/100 && len < 65/100){
        desc.innerHTML = text[3];
    }
    else{
        desc.innerHTML = text[4];
    }
}
function changeImg(len){
    for(let i = 0; i <= 11; i++)
        d3.select("#sum" + (i+1)).style("opacity", opacity(len,i/12,(i+1)/12) + "%");
}
d3.select(".arrowBody")
.on("click", ()=>{
    window.location = "06_exercise.html";
});