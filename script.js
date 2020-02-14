// Function for opening(closing) modal window

(function popup() {
    let
        popup = document.getElementById('popup'),
        popupToggle = document.getElementById('open-calc'),
        popupClose = document.getElementById('close-calc');

    popupToggle.onclick = function () {
        popup.style.display = "block";
        popupToggle.style.display = "none";
        popupClose.style.display = "block";
    }
    popupClose.onclick = function () {
        popup.style.display = "none";
        popupToggle.style.display = "block";
        popupClose.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
            popupToggle.style.display = "block";
            popupClose.style.display = "none";
        }
    }
})();


//Function for marking a row background using checkboxes
(function markingRow() {
    let check1 = document.querySelector(".checkbox1"),
        check2 = document.querySelector(".checkbox2"),
        check3 = document.querySelector(".checkbox3"),
        row1 = document.querySelector(".row1"),
        row2 = document.querySelector(".row2"),
        row3 = document.querySelector(".row3");

    check1.addEventListener("click", function () {
        if (check1.checked) {
            row1.classList.add("active");
        } else {
            row1.classList.remove("active");
        }
    });

    check2.addEventListener("click", function () {
        if (check2.checked) {
            row2.classList.add("active");
        } else {
            row2.classList.remove("active");
        }
    });

    check3.addEventListener("click", function () {
        if (check3.checked) {
            row3.classList.add("active");
        } else {
            row3.classList.remove("active");
        }
    });
})();


//Function for counting the given numbers

let resultController = (function () {
    let num1 = Number(document.querySelector('.given-number1').value),
        num2 = Number(document.querySelector('.given-number2').value),
        num3 = Number(document.querySelector('.given-number3').value),
        num4 = Number(document.querySelector('.given-number4').value),
        num5 = Number(document.querySelector('.given-number5').value),
        num6 = Number(document.querySelector('.given-number6').value),
        num7 = Number(document.querySelector('.given-number7').value),
        num8 = Number(document.querySelector('.given-number8').value),
        num9 = Number(document.querySelector('.given-number9').value),
        res1 = document.querySelector('.calc-result1'),
        res2 = document.querySelector('.calc-result2'),
        res3 = document.querySelector('.calc-result3'),
        focus1 = document.querySelector('.add-number1'),
        focus2 = document.querySelector('.add-number2'),
        focus3 = document.querySelector('.add-number3'),
        sumBtn = document.getElementById('sum'),
        multiplyBtn = document.getElementById('multiply'),
        resultBtn = document.querySelector('.resultBtn');


    let Numbers = function (num1, num2, num3, result) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.result = result;
    }

    Numbers.prototype.sum = function (a, b, c, res) {
        if (isNaN(a) == true) a = 0;
        if (isNaN(b) == true) b = 0;
        if (isNaN(c) == true) c = 0;
        let result = a + b + c;
        res.innerHTML = `${result}`;
    }
    Numbers.prototype.multiply = function (a, b, c, res) {
        if (isNaN(a) == true) a = 1;
        if (isNaN(b) == true) b = 1;
        if (isNaN(c) == true) c = 1;
        let result = a * b * c;
        res.innerHTML = `${result}`;
    }

    let row1 = new Numbers(num1, num2, num3, res1),
        row2 = new Numbers(num4, num5, num6, res2),
        row3 = new Numbers(num7, num8, num9, res3);


    resultBtn.addEventListener('click', function () {
        if (sumBtn.checked) {
            row1.sum(num1, num2, num3, res1);
            row2.sum(num4, num5, num6, res2);
            row3.sum(num7, num8, num9, res3);
        };

        if (multiplyBtn.checked) {
            row1.multiply(num1, num2, num3, res1);
            row2.multiply(num4, num5, num6, res2);
            row3.multiply(num7, num8, num9, res3);
        };


    })


})();

