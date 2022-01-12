d3.select('#myRange').on("input",function(){

//    let check = true;
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value/(max - min);

    if(length < 6.9/7)
        document.getElementById("select").style.zIndex = "0";
    else
        document.getElementById("select").style.zIndex = "15";

    if(length < 1/7){
//        check = false;
        document.getElementById("img01").src = "images\\Descretization\\01.png";
        document.getElementById("point01").style.visibility = "hidden";
        document.getElementById("point02").style.visibility = "hidden";
        document.getElementById("point03").style.visibility = "hidden";
        document.getElementById("point04").style.visibility = "hidden";
        document.getElementById("point05").style.visibility = "hidden";
    }
    else if(length > 2/7 && length < 3/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\02.png";
        document.getElementById("marker1").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "hidden";
        document.getElementById("point03").style.visibility = "hidden";
        document.getElementById("point04").style.visibility = "hidden";
        document.getElementById("point05").style.visibility = "hidden";
    }
    else if(length > 3/7 && length < 4/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\03.png";
        document.getElementById("marker2").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "hidden";
        document.getElementById("point04").style.visibility = "hidden";
        document.getElementById("point05").style.visibility = "hidden";
    }
    else if(length > 4/7 && length < 5/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\04.png";
        document.getElementById("marker3").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
        document.getElementById("point04").style.visibility = "hidden";
        document.getElementById("point05").style.visibility = "hidden";
    }
    else if(length > 5/7 && length < 6/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\05.png";
        document.getElementById("marker4").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
        document.getElementById("point04").style.visibility = "visible";
        document.getElementById("point05").style.visibility = "hidden";
    }
    else if(length > 6/7 && length < 6.9/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\06.png";
        document.getElementById("marker5").style.fill = "#5999e3";
        document.getElementById("point01").style.visibility = "visible";
        document.getElementById("point02").style.visibility = "visible";
        document.getElementById("point03").style.visibility = "visible";
        document.getElementById("point04").style.visibility = "visible";
        document.getElementById("point05").style.visibility = "visible";
    }
    else if(length > 6.9/7){
//        check = true;
        document.getElementById("img01").src = "images\\Descretization\\07.png";
        document.getElementById("marker6").style.fill = "#5999e3";
    }
})

d3.select('#select').on("mouseover", function(){
    this.style.backgroundColor = "#466999";
})

d3.select('#select').on("mouseout", function(){
    this.style.backgroundColor = "";
})