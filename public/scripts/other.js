$(document).ready(function () {

    let x = document.getElementsByClassName('disappear');
    let current = -1;

    function reset() {
        for (let i = 0; i < 4; ++i)
            x[i].style.height = "0"
    }
    $("#techstorm").click(function () {
        reset()
        if (current !== 0){
            current = 0
            x[0].style.height = "100%"
        }
        else{
            x[0].style.height = "0"
            current = -1;
        }
    });

    $("#science").click(function () {
        reset()
        if (current !== 1){
            current = 1
            x[1].style.height = "100%"
        }
        else{
            x[1].style.height = "0"
            current = -1;
        }
    });

    $("#quiz").click(function () {
        reset()
        if (current !== 2){
            current = 2
            x[2].style.height = "100%"
        }
        else{
            x[2].style.height = "0"
            current = -1;
        }
    });

    $("#gaming").click(function () {
        reset()
        if (current !== 3){
            current = 3
            x[3].style.height = "100%"
        }
        else{
            x[3].style.height = "0"
            current = -1;
        }
    });
});