window.addEventListener("load", ()=>{
    //height 711, width 1536
    if(window.innerHeight < 500 || window.innerWidth < 1000){
        document.getElementById("exp").style.fontSize = "1.0rem";
    }
    else if(window.innerHeight < 700 || window.innerWidth < 1500){
        document.getElementById("exp").style.fontSize = "1.1rem";
    }
});
window.addEventListener("resize", ()=> {
    //height 711, width 1536
    if(window.innerHeight < 500 || window.innerWidth < 1000){
        document.getElementById("exp").style.fontSize = "1.0rem";
    }
    else if(window.innerHeight < 700 || window.innerWidth < 1500){
        document.getElementById("exp").style.fontSize = "1.1rem";
    }
    else{
        document.getElementById("exp").style.fontSize = "1.1rem";
    }
});

// Elements Highlights on mouse over
for(let i = 1; i < 10; i++)
{
    d3.select("#pe" + i.toString()).on("mouseover",function()
    {
        let svg = new SVG();
        svg.pElement[i-1].style.stroke = "black";
        svg.pElement[i-1].style.strokeWidth = ".3px";
        svg.pElement[i-1].style.strokeOpacity = "70%";
    });
// Element Highlight removed on mouse out
    d3.select("#pe" + i.toString()).on("mouseout",function()
    {
        let svg = new SVG();
        svg.pElement[i-1].style.stroke = "";
    });
// Element display on click
    d3.select("#pe" + i.toString()).on("click",function()
    {
        activateButton();
        activateText();
        let svg = new SVG();
        svg.drawPElementSelect(i);
// Take care of table entries(function defined at forceTable.js
//        tableValues(i);
        pointLine(svg.line0, i);
        drawBorder(svg.border, i);
        document.querySelectorAll("animate").forEach(element => {
        element.beginElement();
        });
    });
}
function activateButton(){
    d3.select(".arrowBody").style("visibility" , "visible")
        .on("click", ()=>{
            window.location = "05_equilibrium2.html";
        });
}
function activateText(){
    document.getElementById("force").style.visibility = "visible";
}
function drawBorder(border, i)
{
    let val = 0;
    let str = "";
    val = 120 - (i+1)*11;
    str = val.toString();
    border.setAttribute('x',"20");
    border.setAttribute('y',str);
    border.setAttribute('width',"90");
    border.setAttribute('height',"11");
}
function pointLine(line, i)
{
    i = 11 - i;
    let space = (32 - 21);
    let posy = (space * (i-1) + space - .4).toString();
    line.setAttribute('x1','48');
    line.setAttribute('y1','109');
    line.setAttribute('x2','48');
    line.setAttribute('y2', posy);
}

function getPressureElement()
{
    var pElement = [];
    for(let i = 1; i < 10; i++)
    {
        pElement.push(document.getElementById("pe" + i.toString()));
    }
    return pElement;
}

class SVG
{
    constructor()
    {
    // SVG Elements
        this.svg = document.getElementById("svg");
        this.axis = document.getElementById("axis");
        this.pElement = getPressureElement();
        this.ground = document.getElementById("ground");
        this.circle = document.getElementById("circle");
        this.pElementSelect = document.getElementById("peSelect");
        this.vectorTop = document.getElementById("vectorsTop");
        this.vectorBottom = document.getElementById("vectorsBottom");
        this.weight = document.getElementById("weight");
        this.atom = document.getElementById("atom");
        this.line = document.getElementById("line");
        this.line0 = document.getElementById("line0");
        this.border = document.getElementById("border");
        this.vector01 = document.getElementById("vector01");
        this.vector02 = document.getElementById("vector02");
        this.vector03 = document.getElementById("vector03");
        this.text01 = document.getElementById("text01");
        this.text02 = document.getElementById("text02");
        this.text03 = document.getElementById("text03");
//        this.animate = document.getElementById("animate");
    }
}

SVG.prototype.drawAxis = function()
{
    this.axis.setAttribute('d', "M 10 120 V 10 M 11 10 L 5 15 M 9 10 L 15 15");
}

SVG.prototype.drawGround = function()
{
    let val = 120 - 11;
    this.ground.setAttribute('x',"20");
    this.ground.setAttribute('y',val.toString());
    this.ground.setAttribute('width',"90");
    this.ground.setAttribute('height',"11");
}

SVG.prototype.drawPElement = function()
{
    let val = 0;
    let str = "";
    for(let i = 0; i < 9; i++)
    {
        val = 120 - (i+2)*11;
        str = val.toString();
        this.pElement[i].setAttribute('x',"20");
        this.pElement[i].setAttribute('y',str);
        this.pElement[i].setAttribute('width',"90");
        this.pElement[i].setAttribute('height',"11");
    }
}

SVG.prototype.drawPElementSelect = function(i)
{
    this.setCircle();
    this.setElement(i-1);
    this.drawVectors(i-1);
    this.drawLine();
    this.drawPressure();
}

SVG.prototype.drawPressure = function()
{
    this.vectorTop.setAttribute('visibility', 'visible');
    this.vectorBottom.setAttribute('visibility', 'visible');
    this.weight.setAttribute('visibility', 'visible');
    this.atom.setAttribute('visibility', 'visible');
    this.text01.setAttribute('visibility', 'visible');
    this.text02.setAttribute('visibility', 'visible');
    this.text03.setAttribute('visibility', 'visible');
}

SVG.prototype.drawVectors = function(i)
{
    let dz = .1;
    let vector01Length = 25 * Math.exp(-(i+1) * dz);
    let vector03Length = 25 * Math.exp(-i * dz);
    let vector02Length = vector03Length - vector01Length;
    vector02Length += 5;
    let vector01Pont = "M 85 25 V " + (25 + vector01Length).toString() +
                        " M 85 " + (25 + vector01Length).toString() +
                         " L 90 " + (20 + vector01Length).toString() + " M 85 " + (25 + vector01Length).toString() +
                          " L 80 " + (20 + vector01Length).toString();
    let vector02Pont = "M 105 50 V " + (50 + vector02Length).toString() +
                        " M 105 " + (50 + vector02Length).toString() +
                         " L 110 " + (45 + vector02Length).toString() + " M 105 " + (50 + vector02Length).toString() +
                          " L 100 " + (45 + vector02Length).toString();
    let vector03Pont = "M 125 75 V " + (75 - vector03Length).toString() +
                        " M 125 " + (75 - vector03Length).toString() +
                         " L 130 " + (80 - vector03Length).toString() + " M 125 " + (75 - vector03Length).toString() +
                          " L 120 " + (80 - vector03Length).toString();

    this.vector01.setAttribute('d', vector01Pont);
    this.vector02.setAttribute('d', vector02Pont);
    this.vector03.setAttribute('d', vector03Pont);
}

SVG.prototype.drawLine = function(i)
{
    this.line.setAttribute('x1','148');
    this.line.setAttribute('y1','25');
    this.line.setAttribute('x2','148');
    this.line.setAttribute('y2','75');
    document.getElementById('dz').style.visibility = "visible";
}

SVG.prototype.setCircle = function()
{
    this.circle.setAttribute('cx','100');
    this.circle.setAttribute('cy','50');
    this.circle.setAttribute('r','50');
    this.circle.setAttribute('fill','#daeddf');
    this.circle.setAttribute('opacity','70%');
    this.circle.setAttribute('stroke','#c2c200');
}

SVG.prototype.setElement = function(i)
{
    this.pElementSelect.setAttribute('x','65');
    this.pElementSelect.setAttribute('y','25');
    this.pElementSelect.setAttribute('width','75');
    this.pElementSelect.setAttribute('height','50');
    this.pElementSelect.setAttribute('fill',this.pElement[i].getAttribute('fill'));
}

let svg = new SVG();
svg.drawAxis();
svg.drawGround();
svg.drawPElement();