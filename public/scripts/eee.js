$(document).ready(function () {

    let x = document.getElementsByClassName('disappear');
    let checker = [false, false, false]

    $("#toggleFF").click(function () {
        if (!checker[0]) {
            x[0].style.height = "100%"
            checker[0] = true
        }
        else {
            x[0].style.height = "0"
            checker[0] = false
        }
    });

    $("#toggleInv").click(function () {
        if (!checker[1]) {
            x[1].style.height = "100%"
            checker[1] = true
        }
        else {
            x[1].style.height = "0"
            checker[1] = false
        }
    });

    $("#toggleElec").click(function () {
        if (!checker[2]) {
            x[2].style.height = "100%"
            checker[2] = true
        }
        else {
            x[2].style.height = "0"
            checker[2] = false
        }
    });


});