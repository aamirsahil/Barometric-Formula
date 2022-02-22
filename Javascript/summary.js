var text = ["We were interested in studying the variation of atmospheric pressure with height.",
"We Idealized the atmosphere and considered it as a column of air.",
"We continuous column of air was then considered to be made of smaller discrete columns.",
"The discretised column are thenplaced in a co-ordinate system.",
"Net forces acting on an arbitrary column in equilibrium were identified.",
"Involved Ideal gas equation and calculated the variation of pressure with height."];

var head = ["Reality","Idealization","Discretization","Geometry","Algebra"]

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
        let len = args.value;
        if(len <= 2){
            return head[0];
        }
        else if(len > 2 && len <= 25){
            return head[1];
        }
        else if(len > 25 && len <= 50){
            return head[2];
        }
        else if(len > 50 && len <= 65){
            return head[3];
        }
        else{
            return head[4];
        }
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
    else if(len > 65/100 && len < 80/100){
        desc.innerHTML = text[4];
    }
    else{
        desc.innerHTML = text[5];
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