let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let total = document.getElementById("myRange").value;

output.innerHTML = slider.value;

function Total(sum) {
    slider.oninput = function () {
        output.innerHTML = parseInt(this.value) + parseInt(sum);
    }
    return
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
    let price;
    // let y = document.getElementById("desired__division").options;
    switch (x) {
        case 0:
            price = 1
            break;
        case 1:
            price = 2
            break;
        case 2:
            price = 3
            break;
        case 3:
            price = 4
            break;
        case 4:
            price = 5
            break;
        case 5:
            price = 6
            break;
        case 6:
            price = 7
            break;
        case 7:
            price = 8
            break;
        case 8:
            price = 9
            break;
        default:
            price = 0.5
            break;
    }
    return price;
}

function server() {
    let x = document.getElementById("server").selectedIndex;
    let price;

    switch (x) {
        case 0:
            price = 4
            break;
        case 1:
            price = 3
            break;
        case 2:
            price = 2
            break;
        case 3:
            price = 1
            break;

        default:
            price = 0.5
            break;
    }
    return price;
}

function division() {
    let x = document.getElementById("division").selectedIndex;
    let price;

    switch (x) {
        case 0:
            price = 1
            break;
        case 1:
            price = 2
            break;
        case 2:
            price = 3
            break;
        case 3:
            price = 4
            break;

        default:
            price = 0.5
            break;
    }
    return price;
}

function queue() {
    let x = document.getElementById("queue").selectedIndex;
    let price;

    switch (x) {
        case 0:
            price = 1
            break;
        case 1:
            price = 2
            break;
        case 2:
            price = 3
            break;
        case 3:
            price = 4
            break;
        case 4:
            price = 4
            break;

        default:
            price = 0.5
            break;
    }
    return price;
}

function checked() {
    let queue = document.forms[0];
    let price;
    let i;

    for (i = 0; i < queue.length; i++) {
        if (queue[i].checked) {
            price = 3

            alert(price);
            break
        }else{
            price = 10
            break
        }
    }
    return price
    
}