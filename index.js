
var initialMoney = Math.floor(Math.random()*20+2);
var money = initialMoney;

document.querySelector(".money").textContent = money;

// ------------------------------ VARIABLES -------------------------------------------------------

var inventory = [];

var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");

// ------------------------------ CHOICES -------------------------------------------------------

document.querySelector(".choice1").addEventListener("click", function () {
    switch (inventory.length) {
        case 0:
            buyDagger(1);
            break;
        case 1:
            buyDagger(2);
            break;
        case 2:
            buyDagger(3);
            break;
        case 3:
            buyDagger(4);
            break;
        case 4:
            buyDagger(5);
            break;
        case 5:
            buyDagger(6);
            break;
        default: alert("No tienes suficiente espacio en tu inventario.")
            break;
    };
});

document.querySelector(".choice2").addEventListener("click", function () {
    switch (inventory.length) {
        case 0:
            buyFood(1);
            break;
        case 1:
            buyFood(2);
            break;
        case 2:
            buyFood(3);
            break;
        case 3:
            buyFood(4);
            break;
        case 4:
            buyFood(5);
            break;
        case 5:
            buyFood(6);
            break;
        default: alert("No tienes suficiente espacio en tu inventario.")
            break;
    };
});

function buyDagger (n) {
    if (money >= 10) {
        let confirmation = confirm("El precio de la daga es de 10 monedas. ¿Quieres comprar una?");
        if (confirmation == true) {
            alert("Has comprado una daga por 10 monedas. Ahora dispones de " + (money-10) + " moneda(s).")
            document.querySelector(".slot"+n).setAttribute("src","images/dagger.jpg");
            money = (money-10);
            document.querySelector(".money").textContent=money;
            inventory.push(" Dagger");
        } else {
            alert("Decides no comprar la daga.");
        }
    } else {
        alert("No tienes suficiente dinero para comprar esto.")
        choice1.disabled = true;
    }
};

function buyFood (n) {
    if (money >= 3) {
        let confirmation = confirm("El precio de una ración de comida es de 3 monedas. ¿Quieres comprar una?");
        if (confirmation == true) {
            alert("Has comprado algo de comida por 3 monedas. Ahora dispones de " + (money-3)+ " moneda(s).");
            document.querySelector(".slot"+n).setAttribute("src","images/food.jpg");
            money = (money-3);
            document.querySelector(".money").textContent=money;
            inventory.push(" Food");
        } else {
            alert("Decides no comprar comida");
        }
    } else {
        alert("No tienes suficiente dinero para comprar esto.");
        choice2.disabled = true;
    }
};

