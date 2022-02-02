var value = 1;

if(value == 1)
{
    document.getElementById("img01").src = "images\\reality\\mountainClimbing.jpg";
    document.getElementById("img02").src = "images\\reality\\climber2.jpg";
    document.getElementById("img03").src = "images\\reality\\climber3.jpg";
    document.getElementById("img04").src = "images\\reality\\nosebleed.webp";
    document.getElementById("text01").innerHTML = "The mountain climber wants to know how atmospheric pressure effects her physiological changes.";
    document.getElementById("text02").innerHTML = "What happens here is a balance between her blood pressure and atmospheric pressure.";
    document.getElementById("text03").innerHTML = "The blood pressure is controlled by her body.";
    document.getElementById("text04").innerHTML = "This disparity in pressure causes the nosebleed experienced by the mountain climbers";
}
else if(value == 2)
{
    document.getElementById("img01").src = "images\\reality\\boiling.jpg";
    document.getElementById("img02").src = "images\\reality\\cooker2.jpg";
    document.getElementById("img03").src = "images\\reality\\cooker3.jpg";
    document.getElementById("img04").src = "images\\reality\\cooker4.jpg";
    document.getElementById("text01").innerHTML = "The kettle boils at differnet temperature at different altitude.";
    document.getElementById("text02").innerHTML = "Boiling happens when vapour pressure equals atmospheric pressure";
    document.getElementById("text03").innerHTML = "the vapour pressure is dependent on the heat provided and the material used";
    document.getElementById("text04").innerHTML = "The atmospheric pressure is independent of its presence and is what we will look into now.";
}
else if(value == 3)
{
    document.getElementById("img01").src = "images\\reality\\hotbaloon.jpg";
    document.getElementById("img02").src = "images\\reality\\balloon2.jpg";
    document.getElementById("img03").src = "images\\reality\\balloon3.jpg";
    document.getElementById("img04").src = "images\\reality\\balloon4.jpg";
    document.getElementById("text01").innerHTML = "The enthusiast wants to know a rough estimate of how much gas he need to carry beforehand.";
    document.getElementById("text02").innerHTML = "Balloon rises when the internal pressure is greater than the atmospheric pressure and lower in the opposite case.";
    document.getElementById("text03").innerHTML = "Internal pressure is controlled by the gas combustion";
    document.getElementById("text04").innerHTML = "The atmospheric pressure is independent of its presence and is what we will look into now.";
}

for(let i = 1; i < 4; i++)
{
    d3.select("#next0" + i.toString()).on("click", function()
    {
        turnVisible(i);
    });
}

function turnVisible(i)
{
    i++;
    let img = document.getElementById("img0" + i.toString());
    let text = document.getElementById("text0" + i.toString());
    if(i < 4)
    {
        let next = document.getElementById("next0" + i.toString());
        next.style.visibility = "visible";
        next = document.getElementById("next0" + (i-1).toString());
        next.style.visibility = "hidden";
    }
    else
    {
        let idealize = document.getElementById("idealize");
        idealize.style.visibility = "visible";
        let height = window.innerHeight - 350;
        console.log(height);
        document.getElementById("img_row").style.height = height.toString() + "px";
    }
    if(i == 4)
    {
        let next = document.getElementById("next0" + (i-1).toString());
        next.style.visibility = "hidden";
    }
    img.style.visibility = "visible";
    text.style.visibility = "visible";
}