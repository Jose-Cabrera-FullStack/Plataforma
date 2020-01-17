const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const outputArg = document.getElementById("arg");
const total = document.getElementById("myRange").value;

output.innerHTML = slider.value;

function Total(sum) {
    const argValue = 60
    slider.oninput = function () {
        let price = output.innerHTML = parseInt(this.value) + parseInt(sum);
        outputArg.innerHTML = price * argValue;
        return price
    }

}

function Sum() {
    let number = 1;
    dd = disiredDivision()
    sr = server()
    dv = division()
    qu = queue()
    ck = checked()

    number *= (dd * sr * dv * qu * ck) + total

    Total(number)
}

function disiredDivision() {
    let x = document.getElementById("desired__division").selectedIndex;
    // let y = document.getElementById("desired__division").options;
    let val = (x + 0.1) * 2

    switch (x) {
        case 0:
            return val 
        case 1:
            return val
        case 2:
            return val
        case 3:
            return val
        case 4:
            return val
        case 5:
            return val
        case 6:
            return val
        case 7:
            return val
        case 8:
            return val
        default:
            return val
    }
}

function server() {
    let x = document.getElementById("server").selectedIndex;

    switch (x) {
        case 0:
            return price = 4
        case 1:
            return price = 3
        case 2:
            return price = 2
        case 3:
            return price = 1

        default:
            return price = 0.5
    }
}

function division() {
    let x = document.getElementById("division").selectedIndex;
    let price;

    switch (x) {
        case 0:
            return price = 1
        case 1:
            return price = 2
        case 2:
            return price = 3
        case 3:
            return price = 4

        default:
            return price = 0.5
    }
}

function queue() {
    let x = document.getElementById("queue").selectedIndex;
    let price;

    switch (x) {
        case 0:
            return price = 1
        case 1:
            return price = 2
        case 2:
            return price = 3
        case 3:
            return price = 4
        case 4:
            return price = 4

        default:
            return price = 0.5
    }
}

function checked() {
    let queue = document.getElementsByName("title");
    let price;
    let i;

    for (i = 0; i < queue.length; i++) {
        if (queue[i].value==="solo" && queue[i].checked) {
            price = 34
            break
        }else{
            price = 10
            break
        }
    }
    return price
    
}