d3.select('#myRange02').on("input",function(){

    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value/(max - min);

    setAnim(length);
    setImage(length);
    setText(length);
    setBtn(length);
    setAxisSelection(length);
})

function setAxisSelection(length)
{
    if(length < 5.7/6)
        document.getElementById("selection").style.zIndex = "0";
    else
        document.getElementById("selection").style.zIndex = "15";
}

function setAnim(length)
{
    if(length < (1/6)){
        document.getElementById("earth").style.webkitAnimationPlayState = "running";
    }
    else if(length > (1/6) && length < (2/6)){
        document.getElementById("earth").style.webkitAnimationPlayState = "paused";
        document.getElementById("earth").style.webkitAnimationTimingFunction = "cubic-bezier(0,0,1,1)";
    }
}

function setImage(length)
{
    document.getElementById("earth").style.opacity = opacity(length,2/6,3/6).toString() + "%";
    document.getElementById("atmos1").style.opacity = opacity(length,3/6,4/6).toString() + "%";
    document.getElementById("atmos2").style.opacity = opacity(length,4/6,5.9/6).toString() + "%";
    document.getElementById("atmos3").style.opacity = opacity(length,5.9/6,1).toString() + "%";
}
function opacity(length,min,max)
{
    if(length < min)
        return 100;
    if(length > max)
        return 0;
    var opacity = (max - length) * 600;
    return opacity;
}

function setText(length)
{
    if(length < (1/6)){
        document.getElementById("idealExp").innerHTML = "We need to make approximations.";
    }
    else if(length > (1/6) && length < (2/6)){
        document.getElementById("idealExp").innerHTML = "Rotation of the Earth discarded";
    }
    else if(length > (2/6) && length < (3/6)){
        document.getElementById("idealExp").innerHTML = "Curvature of the earth discarded";
    }
    else if(length > (3/6) && length < (4/6)){
        document.getElementById("idealExp").innerHTML = "No heat source or sink present";
    }
    else if(length > (4/6) && length < (5/6)){
        document.getElementById("idealExp").innerHTML = "We need gravity because it is essential";
    }
    else if(length >= (5/6) && length < (5.9/6)){
        document.getElementById("idealExp").innerHTML = "Atmosphere is assumed to be homogenous";
    }
    else if(length >= (5.7/6)){
        document.getElementById("idealExp").innerHTML = "Now we can consider the system as a column of air";
    }
}

function setBtn(length)
{
    if(length < (1/6)){
        resetButton(-1);
    }
    else if(length > (1/6) && length < (2/6)){
        document.getElementById("rotBt").setAttribute("class","btn btn-secondary");
        resetButton(0);
    }
    else if(length > (2/6) && length < (3/6)){
        document.getElementById("curBt").setAttribute("class","btn btn-secondary");
        resetButton(1);
    }
    else if(length > (3/6) && length < (4/6)){
        document.getElementById("htBt").setAttribute("class","btn btn-secondary");
        resetButton(2);
    }
    else if(length > (4/6) && length < (5/6)){
        resetButton(3);
    }
    else if(length >= (5/6) && length < (5.9/6)){
        document.getElementById("airBt").setAttribute("class","btn btn-secondary");
        resetButton(4);
    }
}

var btnId = ["rotBt", "curBt", "htBt", "grBt", "airBt"];

function resetButton(i)
{
    for(let j = 0; j < 5; j++)
    {
        if(j <= i)
        {
            continue;
        }
        document.getElementById(btnId[j]).setAttribute("class","btn btn-primary");
    }
}

d3.select('#selection').on("mouseover",function(){
    this.style.backgroundColor = "#466999";
})

d3.select('#selection').on("mouseout",function(){
    this.style.backgroundColor = "";
})