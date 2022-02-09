var desc = ["Reality", "Idealization", "Discretization", "Geometric", "Algebraic"];
for(let i = 1; i < 6; i++)
{
    let text = document.getElementById("text" + i.toString());
    text.style.visibility = "visible";
    text.innerHTML = desc[i-1];
}
// var link = [
//     "/02_reality.html",
//     "/03_idealization.html",
//     "/04_descretization.html",
//     "/05_equilibrium.html",
//     "/05_equilibrium2.html",
//     "/06_solution.html",
//     "/07_final.html",
//     "/06_exercise.html"
// ];
// d3.select("#navBtn").on("click",()=>{
//     let i = link.indexOf(window.location.pathname);
//     window.location = link[i+1];
// });
window.addEventListener("load", ()=>{
    let link = [
        "/02_reality.html",
        "/03_idealization.html",
        "/04_descretization.html",
        "/05_equilibrium.html",
        "/05_equilibrium2.html",
        "/06_solution.html",
    ];
    let loc = window.location.pathname.replace("/Barometric-Formula", "");
    let i = link.indexOf(loc);
    if(i==4) i=3;
    if(i == 5) i=4;
    let width = d3.select(".navSvg").style("width").replace("px","");
    let xStart = parseInt(width/6);
    let xOffset = 20;
    let xEnd = (i+1)*xStart + xOffset;
    xOffset = 80;
    xStart += xOffset;
    

    d3.select("#track").attr("d", "M " +  xStart + " 15 H " + xEnd);
})

// window.addEventListener("load",()=>{
//     resetnextNav();
// });
// window.addEventListener("resize",()=>{
//     resetnextNav();
// })
// function resetnextNav(){
//     d3.select(".nextNav").attr("width", window.innerWidth + "");
// }

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
