//сроки
let sumTime = document.querySelector(".term");
sumTime.innerText = 0;


//стоимость
let sumCost = document.querySelector(".rezCost");
sumCost.innerText = 0;


let sum = 0;
let days = 0;


$(".type").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val());
        days = days + parseInt($(this).val())
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }

    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});


$(".dezine").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val());
        days = days + parseInt($(this).val())
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }


    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

$(".adaptive").on("change", function() {

    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val());
        days = days + parseInt($(this).val())
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }


    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

sum = sum + (days * 2000);
days = days + 5;