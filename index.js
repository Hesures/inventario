
var initialMoney = Math.floor(Math.random()*20+2);
var money = initialMoney;

document.querySelector(".money").textContent=money;

// ------------------------------ VARIABLES -------------------------------------------------------

var inventoryArray = [];

var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");

// ------------------------------ CHOICES -------------------------------------------------------


document.querySelector(".choice1").addEventListener("click", function () {
    switch (inventoryArray.length) {
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
    switch (inventoryArray.length) {
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
        document.querySelector(".slot"+n).setAttribute("src","images/dagger.jpg");
        alert("Has comprado una daga por 10 monedas. Ahora dispones de " + (money-10) + " moneda(s).")
        money = (money-10);
        document.querySelector(".money").textContent=money;
        inventoryArray.push(" Dagger");
    } else {
        alert("No tienes suficiente dinero para comprar esto.")
        choice1.disabled = true;
    }
};

function buyFood (n) {
    if (money >= 3) {
        document.querySelector(".slot"+n).setAttribute("src","images/food.jpg");
        alert("Has comprado algo de comida por 3 monedas. Ahora dispones de " + (money-3)+ " moneda(s).");
        money = (money-3);
        document.querySelector(".money").textContent=money;
        inventoryArray.push(" Food");
    } else {
        alert("No tienes suficiente dinero para comprar esto.");
        choice2.disabled = true;
    }
}

document.querySelector(".choice3").addEventListener("click", function (){
    document.querySelector(".slot1").setAttribute("src","images/daga.jpg");   
});
