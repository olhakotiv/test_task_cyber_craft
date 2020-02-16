// UI CONTROLLER
let UIController = (function () {
    //Objects with the most used DOM strings
    let DOMStrings = {
        givenNumber: ".given-number",
        check: ".checkbox",
        row: ".row",
        calcRes: ".calc-result"
    },
        DOMId = {
            popup: document.getElementById("popup"),
            popupToggle: document.getElementById("open-calc"),
            popupClose: document.getElementById("close-calc"),
            sumBtn: document.getElementById("sum"),
            multBtn: document.getElementById("multiply")
        };

    return {
        getDOMStrings: function () {
            return DOMStrings;
        },

        getDOMId: function () {
            return DOMId;
        },

        markingRow: function () {
            let check1 = document.querySelector(`${DOMStrings.check}1`),
                check2 = document.querySelector(`${DOMStrings.check}2`),
                check3 = document.querySelector(`${DOMStrings.check}3`),
                row1 = document.querySelector(`${DOMStrings.row}1`),
                row2 = document.querySelector(`${DOMStrings.row}2`),
                row3 = document.querySelector(`${DOMStrings.row}3`);

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
        }
    };
})();

//CALC CONTROLLER
let calcController = (function () {
    return {
        resultController: function () {

            //import DOM from UIController
            let DOM = UIController.getDOMStrings(),
                DOMBtn = UIController.getDOMId();

            //Constructor for the row object
            let Numbers = function (num1, num2, num3, result) {
                this.num1 = num1;
                this.num2 = num2;
                this.num3 = num3;
                this.result = result;
            };

            //Function for summing
            Numbers.prototype.sum = function () {
                let a = Number(this.num1.value),
                    b = Number(this.num2.value),
                    c = Number(this.num3.value);

                let nums = [a, b, c],
                    result = nums.reduce((a, b) => a + b);

                this.result.innerHTML = `${result}`;
            };

            //Function for multiplying
            Numbers.prototype.multiply = function () {
                let a = this.num1.value,
                    b = this.num2.value,
                    c = this.num3.value;

                let nums = [a, b, c].filter(x => x !== ""),
                    result = 1;

                if (nums.length === 0) {
                    result = 0;
                } else {
                    for (let i = 0; i < nums.length; i++) {
                        result *= Number(nums[i]);
                    }
                }

                this.result.innerHTML = `${result}`;
            };
            //Auto reload result
            Numbers.prototype.autoReload = function () {
                // Function for auto-reloading 1 input
                function reloadResult(num) {
                    let timerId;
                    //Check is input onfocus
                    num.onfocus = function () {
                        let lastValue = Number(num.value);
                        timerId = setInterval(function () {
                            if (Number(num.value) != lastValue) {
                                showRes();
                                lastValue = Number(num.value);
                            }
                        }, 20);
                    };
                    //If the input is not on focus clear interval
                    num.onblur = function () {
                        clearInterval(timerId);
                    };
                    //Function for showing result
                    function showRes() {
                        if (DOMBtn.sumBtn.checked) {
                            row1.sum();
                            row2.sum();
                            row3.sum()
                        }
                        if (DOMBtn.multBtn.checked) {
                            row1.multiply();
                            row2.multiply();
                            row3.multiply();
                        }
                    }
                }
                reloadResult(this.num1);
                reloadResult(this.num2);
                reloadResult(this.num3);

            }
            //Variables for the inputs and results
            let num1 = document.querySelector(`${DOM.givenNumber}1`),
                num2 = document.querySelector(`${DOM.givenNumber}2`),
                num3 = document.querySelector(`${DOM.givenNumber}3`),
                num4 = document.querySelector(`${DOM.givenNumber}4`),
                num5 = document.querySelector(`${DOM.givenNumber}5`),
                num6 = document.querySelector(`${DOM.givenNumber}6`),
                num7 = document.querySelector(`${DOM.givenNumber}7`),
                num8 = document.querySelector(`${DOM.givenNumber}8`),
                num9 = document.querySelector(`${DOM.givenNumber}9`),
                res1 = document.querySelector(`${DOM.calcRes}1`),
                res2 = document.querySelector(`${DOM.calcRes}2`),
                res3 = document.querySelector(`${DOM.calcRes}3`);

            //Create the new row objects
            let row1 = new Numbers(num1, num2, num3, res1),
                row2 = new Numbers(num4, num5, num6, res2),
                row3 = new Numbers(num7, num8, num9, res3);

            //Check what button was clicked(sum or multiply)
            DOMBtn.sumBtn.addEventListener("click", function () {
                row1.sum();
                row2.sum();
                row3.sum();
            });
            DOMBtn.multBtn.addEventListener("click", function name(params) {
                row1.multiply();
                row2.multiply();
                row3.multiply();
            });

            //Reload results for all rows
            row1.autoReload();
            row2.autoReload();
            row3.autoReload();

        }
    };
})();

//APP CONTROLLER
let appController = (function (UICtrl, calCtrl) {
    let DOM = UIController.getDOMStrings();
    let setupEventListeners = function () {
        let DOMId = UIController.getDOMId();

        //Open calc
        function popupOpen() {
            DOMId.popup.style.display = "block";
            DOMId.popupToggle.style.display = "none";
            DOMId.popupClose.style.display = "block";
        }

        //Open calc with 'Open Calc' button
        DOMId.popupToggle.addEventListener("click", popupOpen);

        //Open calc with enter button
        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                popupOpen();
            }
        });
        //Close calc with 'Close Calc' button
        function popupClose() {
            DOMId.popup.style.display = "none";
            DOMId.popupToggle.style.display = "block";
            DOMId.popupClose.style.display = "none";
        }
        DOMId.popupClose.addEventListener("click", popupClose);
    };

    //Chose the row
    UIController.markingRow();

    //Start calc
    calcController.resultController();

    return {
        init: function () {
            //Clear all inputs after reloading page
            $(document).ready(function () {
                $('input[type="number"]').val("");
                $("input:checked").prop("checked", false);
            });
            //Setup EventListeners
            setupEventListeners();
        }
    };
})(UIController, calcController);

appController.init();
