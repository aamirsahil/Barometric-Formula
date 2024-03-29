d3.select('#myRange').on("input",function(){

//    let check = true;
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value/(max - min);

    if(length < 4.9/5)
        document.getElementById("select").style.zIndex = "0";
    else
        document.getElementById("select").style.zIndex = "15";

    if(length < 1/5){
//        check = false;
        document.getElementById("img01").src = "images\\Descretization\\01.png";

        document.getElementById("marker2").style.fill = "#a6a5a2";
        document.getElementById("marker3").style.fill = "#a6a5a2";
        document.getElementById("marker4").style.fill = "#a6a5a2";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";

        document.getElementById("point01").style.visibility = "hidden";
        document.getElementById("point02").style.visibility = "hidden";
        document.getElementById("point03").style.visibility = "hidden";
        document.getElementById("point04").style.visibility = "hidden";
    }
    else if(length > 1/5 && length < 2/5){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\02_alt.png";

        document.getElementById("marker2").style.fill = "#5999e3";
        document.getElementById("marker3").style.fill = "#a6a5a2";
        document.getElementById("marker4").style.fill = "#a6a5a2";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";

        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "hidden";
        document.getElementById("point03").style.visibility = "hidden";
        document.getElementById("point04").style.visibility = "hidden";
    }
    else if(length > 2/5 && length < 3/5){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\03_alt.png";

        document.getElementById("marker3").style.fill = "#5999e3";
        document.getElementById("marker4").style.fill = "#a6a5a2";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";

        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "hidden";
    }
    else if(length > 3/5 && length < 4/5){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\04_alt.png";

        document.getElementById("marker4").style.fill = "#5999e3";
        document.getElementById("marker5").style.fill = "#a6a5a2";
        document.getElementById("marker6").style.fill = "#a6a5a2";

        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
    }
    else if(length > 4/5 && length <= 4.9/5){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\05_alt.png";

        document.getElementById("marker5").style.fill = "#5999e3";
        document.getElementById("marker6").style.fill = "#a6a5a2";

        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
    }
    else if(length > 4.9/5){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\07.png";
        document.getElementById("marker6").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
        d3.select(".arrowBody").style("visibility" , "visible")
        .on("click", ()=>{
            window.location = "05_equilibrium.html";
        });
    }
})

d3.select('#select').on("mouseover", function(){
    this.style.backgroundColor = "#466999";
})

d3.select('#select').on("mouseout", function(){
    this.style.backgroundColor = "";
})

function svgResize()
{
    d3.select("#marker1")
        .attr("x", 0);
    d3.select("#marker2")
        .attr("x", (1/5)*d3.select("#svg").style("width").replace("px", ""));
        d3.select("#marker3")
        .attr("x", (2/5)*d3.select("#svg").style("width").replace("px", ""));
    d3.select("#marker4")
        .attr("x", (3/5)*d3.select("#svg").style("width").replace("px", ""));
        d3.select("#marker5")
        .attr("x", (4/5)*d3.select("#svg").style("width").replace("px", ""));
    d3.select("#marker6")
        .attr("x", (4.7/5)*d3.select("#svg").style("width").replace("px", ""));
}
window.addEventListener("load",svgResize());