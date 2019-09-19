$(document).ready(function () {

    $("#toggleBascule").click(function () {
        $("#disappearBascule").toggleClass("non-disappear");
    });

    $("#toggleCantilever").click(function () {
        $("#disappearCantilever").toggleClass("non-disappear");
    });

    $("#toggleSimulator").click(function () {
        $("#disappearSimulator").toggleClass("non-disappear");
    });

    $("#toggleAutocad").click(function () {
        $("#disappearAutocad").toggleClass("non-disappear");
    });

    $("#togglePOC").click(function () {
        $("#disappearPOC").toggleClass("non-disappear");
    });

    $("#toggleQuiz").click(function () {
        $("#disappearQuiz").toggleClass("non-disappear");
    });


});