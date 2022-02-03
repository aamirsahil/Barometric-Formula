//function setExp()
//{
//// Heading and lists
//    let head = document.createElement('h1');
//    let listMain = document.createElement('ul');
//    let listSub = document.createElement('ul')
//    listMain.setAttribute('id', 'listMain');
//    listSub.setAttribute('id', 'listSub');
//// The listed sentences
//    let ml1 = document.createElement('li');
//    let ml2 = document.createElement('li');
//    let ml21 = document.createElement('li');
//    let ml22 = document.createElement('li');
//    let ml23 = document.createElement('li');
//    let ml3 = document.createElement('li');
//    ml3.setAttribute('id', 'ml3');
////// The info button
////    let button = document.createElement('button');
////    button.setAttribute('id', 'button02');
////    button.setAttribute('type','button');
////    button.setAttribute('class','btn btn-success');
//// Setting the inner html
//    head.innerHTML = "The system on mathematical grid";
//    ml1.innerHTML = "The entire system is put in a 1D coordinate system(\\(z\\)), and vectors " +
//     "are introduced to represent forces.";
//    ml2.innerHTML = "Forces acting in this case are,(click on any pressure element in the picture)";
//    ml21.innerHTML = "Force from pressure element on top,$$ F_1 = P_{i+1} \\times A $$";
//    ml22.innerHTML = "Weight of the pressure element,$$ F_2 = \\rho Agdz $$";
//    ml23.innerHTML = "Force from pressure element below,$$ F_3 = P_{i} \\times A $$";
//    ml3.innerHTML = "Here \\(A\\) is the cross-section area of the pressure element and \\(dz\\) it's thickness";
////    button.innerHTML = "WHY?"
//// Properly adding to desired parent
//    $('#exp').prepend(head);
//    $('#exp').append(listMain);
//    $('#listMain').append(ml1);
//    $('#listMain').append(ml2);
//    $('#listMain').append(listSub);
//    $('#listSub').append(ml21);
//    $('#listSub').append(ml22);
//    $('#listSub').append(ml23);
//    $('#listMain').append(ml3);
////    $('#ml3').append(button);
//// Navigation Button
//    createButton();
//    $('#button01').html("Go to Derivation");
//    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
//}
//function setEq(){
//// Row and Column div
//    let divRow = document.createElement('div');
//    let divCol1 = document.createElement('div');
//    let divCol2 = document.createElement('div');
//    divRow.setAttribute('class', 'row');
//    divRow.setAttribute('id', 'row');
//    divCol1.setAttribute('class', 'col-md-11');
//    divCol1.setAttribute('id', 'col1');
//    divCol2.setAttribute('class', 'col-md-1');
//    divCol2.setAttribute('id', 'col2');
//// Heading and lists
//    let head = document.createElement('h1');
//    let step1 = document.createElement('p');
//    let step2 = document.createElement('p');
//    let step3 = document.createElement('p');
//    let step4 = document.createElement('p');
//    step1.setAttribute('id', 'step1');
//    step2.setAttribute('id', 'step2');
//    step3.setAttribute('id', 'step3');
//    step4.setAttribute('id', 'step4');
//// Derivation steps
//    let text1 = "We start with, $$ F_{Net} = (F_1 + F_2) - F_3 = 0 $$";
//    let text2 = "Substituting the values, $$ (P_{i+1} \\times A + \\rho Agdz) - P_i \\times A = 0 $$";
//    let text3 = "Rearranging, $$ (P_{i+1} \\times A - P_i \\times A) = - \\rho Agdz $$" +
//                "$$ (P_{i+1} - P_i) = - \\rho gdz $$";
//    let text4 ="Which is, $$ dP = \\rho gdz $$";
//// The Slider
//    let slider = document.createElement('input');
//    slider.setAttribute('id', 'mySlider');
//    slider.setAttribute('type','range');
//    slider.setAttribute('min','0');
//    slider.setAttribute('max','100');
//    slider.setAttribute('value','0');
//    slider.setAttribute('class','slider');
//    slider.style.transform = "rotate(90deg)";
//    slider.style.margin = "-70px";
//// Setting the inner html
//    head.innerHTML = "Analytical treatment";
//    step1.innerHTML = text1;
//    step2.innerHTML = text2;
//    step3.innerHTML = text3;
//    step4.innerHTML = text4;
//    step2.style.visibility = "hidden";
//    step3.style.visibility = "hidden";
//    step4.style.visibility = "hidden";
//// Properly adding to desired parent
//    $('#exp').prepend(head);
//    $('#exp').append(divRow);
//    $('#row').append(divCol1);
//    $('#row').append(divCol2);
//    $('#col1').append(step1);
//    $('#col1').append(step2);
//    $('#col1').append(step3);
//    $('#col1').append(step4);
//    $('#col2').append(slider);
////Navigation Button
//    sliderReady();
//    createButton();
//    createButton2();
//    $('#button01').html("Go to Explanation");
//    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
//}
//function createButton()
//{
//    let button = document.createElement('button');
//    button.setAttribute('id','button01');
//    button.setAttribute('type','button');
//    button.setAttribute('class','btn btn-primary');
//    $('#exp').append(button);
//    buttonReady();
//}
//setExp();
//
//function buttonReady()
//{
//    d3.select("#button01").on("click", function()
//    {
//        if($('#button01').html() == "Go to Explanation")
//        {
//            $('#exp').empty();
//            setExp();
//        }
//        else if($('#button01').html() == "Go to Derivation")
//        {
//            $('#exp').empty();
//            setEq();
//        }
//    });
//}
//
//function createButton2()
//{
//    let button = document.createElement('button');
//    button.setAttribute('id','button02');
//    button.setAttribute('type','button');
//    button .innerHTML = "Go ot Solution"
//    button.setAttribute('class','btn btn-success');
//    button.style.float = "right";
//    button.style.visibility = "hidden";
//    $('#exp').append(button);
//    button2Ready();
//}
//function button2Ready()
//{
//    d3.select("#button02").on("click", function()
//    {
//        window.location = '06_solution.html';
//    });
//}
//function sliderReady()
//{
//    d3.select("#mySlider").on("input", function()
//    {
//        let value = d3.select(this).property("value");
//        let max = d3.select(this).property("max");
//        let min = d3.select(this).property("min");
//        let button = document.getElementById("button02");
//        let length = value/(max - min);
//
//        if(length < 1/4)
//        {
//            step2.style.visibility = "hidden";
//            step3.style.visibility = "hidden";
//            step4.style.visibility = "hidden";
//        }
//        else if(length > 1/4 && length < 2/4)
//        {
//            step2.style.visibility = "visible";
//            step3.style.visibility = "hidden";
//            step4.style.visibility = "hidden";
//        }
//        else if(length > 2/4 && length < 3/4)
//        {
//            step2.style.visibility = "visible";
//            step3.style.visibility = "visible";
//            step4.style.visibility = "hidden";
//        }
//        else if(length > 3/5)
//        {
//            button.style.visibility = "visible";
//            step2.style.visibility = "visible";
//            step3.style.visibility = "visible";
//            step4.style.visibility = "visible";
//        }
//    });
//}
d3.select("#mySlider").on("input", function()
{
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let button = document.getElementById("button");
    let length = value/(max - min);

    if(length < 1/4)
    {
        if(length < 1/8){
            let image = document.getElementById("img");
            image.src = "images/equilibrium/vectors6.png";
            image.style.height = "65%";
            image.style.top = "3%";
            image.style.left = "30%";
        }
        else if(length < 2/8){
            let image = document.getElementById("img");
            image.src = "images/equilibrium/vectors7.png";
            image.style.height = "65%";
            image.style.top = "3%";
            image.style.left = "30%";
        }
        step2.style.visibility = "hidden";
        step3.style.visibility = "hidden";
        step4.style.visibility = "hidden";
    }
    else if(length > 1/4 && length < 2/4)
    {
        step2.style.visibility = "visible";
        step3.style.visibility = "hidden";
        step4.style.visibility = "hidden";
    }
    else if(length > 2/4 && length < 3/4)
    {
        step2.style.visibility = "visible";
        step3.style.visibility = "visible";
        step4.style.visibility = "hidden";
    }
    else if(length > 3/5)
    {
        button.style.visibility = "visible";
        step2.style.visibility = "visible";
        step3.style.visibility = "visible";
        step4.style.visibility = "visible";
    }
});