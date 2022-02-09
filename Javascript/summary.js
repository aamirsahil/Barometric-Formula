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

function changeText(len){

}
function changeImg(len){
    let img = document.getElementById("summary");
    for(let i = 0; i <= 11; i++){
        if(len > i/12 && len < (i+1)/12){
            img.style.backgroundImage = "url(\"images/summary/0" + (i+1).toString() + ".png\")";
            return;
        } 
    }
}
d3.select(".arrowBody")
.on("click", ()=>{
    window.location = "06_exercise.html";
});