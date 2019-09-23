$(document).ready(function () {

    let x = document.getElementsByClassName('disappear');
    let checker = [false, false, false, false, false, false]

    $("#toggleBascule").click(function () {
        if (!checker[0]) {
            x[0].style.height = "100%"
            checker[0] = true
        }
        else {
            x[0].style.height = "0"
            checker[0] = false
        }
    });

    $("#toggleCantilever").click(function () {
        if (!checker[1]) {
            x[1].style.height = "100%"
            checker[1] = true
        }
        else {
            x[1].style.height = "0"
            checker[1] = false
        }
    });

    $("#toggleSimulator").click(function () {
        if (!checker[2]) {
            x[2].style.height = "100%"
            checker[2] = true
        }
        else {
            x[2].style.height = "0"
            checker[2] = false
        }
    });

    $("#toggleAutocad").click(function () {
        if (!checker[3]) {
            x[3].style.height = "100%"
            checker[3] = true
        }
        else {
            x[3].style.height = "0"
            checker[3] = false
        }
    });

    $("#togglePOC").click(function () {
        if (!checker[4]) {
            x[4].style.height = "100%"
            checker[4] = true
        }
        else {
            x[4].style.height = "0"
            checker[4] = false
        }
    });

    $("#toggleQuiz").click(function () {
        if (!checker[5]) {
            x[5].style.height = "100%"
            checker[5] = true
        }
        else {
            x[5].style.height = "0"
            checker[5] = false
        }
    });
});