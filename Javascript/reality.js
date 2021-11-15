var text1st = "<h1>Mountain Climber</h1><p>A Mountain climber would like to know how the atmospheric pressure changes" +
            "with height since it will have physiological effect on her.</p>";
var text2nd = "<h1>Climate Study</h1><p>A Climate study group would like to know how climate is effected by pollutants.</p>";
var text3rd = "<h1>Hot Air Balloon</h1><p>A Hot air balloon enthusiast wanted to know the amount of fuel he need to carry" +
            "before hand so that he can take a picture from 1km above sea line.</p>";

var textDesc = [text1st, text2nd, text3rd];


for(let i = 1; i < 4; i++)
{
    d3.select("#img0" + i.toString()).on("mouseover", function()
    {
        mouseOver(i);
    });
    d3.select("#img0" + i.toString()).on("mouseout", function()
    {
        mouseOut(i);
    });
}

for(let i = 1; i < 6; i++)
{
    d3.select("#text0" + i.toString()).on("mouseover", function()
    {
        mouseOver(i);
    });
    d3.select("#text0" + i.toString()).on("mouseout", function()
    {
        mouseOut(i);
    });
}

function mouseOver(i)
{
    let img = document.getElementById("img0" + i.toString());
    let text = document.getElementById("text0" + i.toString());
    img.style.opacity = "92%"
    text.style.visibility = "visible";
    text.innerHTML = textDesc[i-1];
}

function mouseOut(i)
{
    let img = document.getElementById("img0" + i.toString());
    let text = document.getElementById("text0" + i.toString());
    img.style.opacity = "100%"
    text.style.visibility = "hidden";
    text.innerHTML = ""
}