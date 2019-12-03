var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var total = document.getElementById("myRange").value;


function Total() {
    slider.oninput = function () {
        output.innerHTML = parseInt(this.value) + parseInt(total);
    }
}

function myFunction() {
    var x = document.getElementById("desired__division").selectedIndex;
    var y = document.getElementById("desired__division").options;

    // if (y[x].text === "Iron"){
    //     total=total + 1000
    // }
    return total
    alert(y[x].text);
}