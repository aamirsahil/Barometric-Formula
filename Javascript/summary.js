var text = [];

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

}
function changeImg(len){
    for(let i = 0; i <= 11; i++)
        d3.select("#sum" + (i+1)).style("opacity", opacity(len,i/12,(i+1)/12) + "%");
}
d3.select(".arrowBody")
.on("click", ()=>{
    window.location = "06_exercise.html";
});