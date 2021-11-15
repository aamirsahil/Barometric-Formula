d3.select('#myRange03').on("input",function(){

    let check = true;
    let value = d3.select(this).property("value");
    let max = d3.select(this).property("max");
    let min = d3.select(this).property("min");
    let length = value/(max - min);

    document.getElementById("img04").style.opacity = (100 * (1 - length)).toString() + "%";
    document.getElementById("img05").style.opacity = (100 * (1 - length)).toString() + "%";

    if(length > 0.5){
        document.getElementById("desc").innerHTML = "For this we need to look at the atmosphere it self at first and idealize it to a " +
                                    "column of air.";
    }
    else if(length <= 0.5){
        document.getElementById("desc").innerHTML = "Both these systems require us to find the atmosphere pressure at the given altitude " +
                "so that the difference in internal and external pressure can be calculated.";
    }
})