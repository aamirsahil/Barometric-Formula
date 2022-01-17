var desc = ["Reality", "Idealization", "Descretization", "Geometric", "Mathematic"];
for(let i = 1; i < 6; i++)
{
    let text = document.getElementById("text" + i.toString());
    text.style.visibility = "visible";
    text.innerHTML = desc[i-1];
}

//for(let i = 1; i < 6; i++)
//{
//    d3.select("#text" + i.toString()).on("mouseover", function()
//    {
//        mouseOvernav(i);
//    });
//    d3.select("#text" + i.toString()).on("mouseout", function()
//    {
//        mouseOutnav(i);
//    });
//}
//
//function mouseOvernav(i)
//{
//    let img = document.getElementById("img" + i.toString());
//    let text = document.getElementById("text" + i.toString());
//    text.style.visibility = "visible";
//    text.innerHTML = desc[i-1];
//}
//
//function mouseOutnav(i)
//{
//    let img = document.getElementById("img" + i.toString());
//    let text = document.getElementById("text" + i.toString());
//    text.style.visibility = "hidden";
//    text.innerHTML = ""
//}