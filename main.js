$(document).ready(function() {

});

$("#getCalculator").on('click', function()  {
    //$("#load_main").load('calculator.html');
    //load_home();
});

function load_home() {
     document.getElementById("load_main").innerHTML='<object type="text/html" data="calculator.html" ></object>';
}

function add() {
    document.getElementById("myText").value = "";
}

function subtract() {
    document.getElementById("myText").value = "";
}

function multiply() {
    document.getElementById("myText").value = "";
}

function divide() {
    document.getElementById("myText").value = "";
}

$("#sampleCompute").on('click', function() {
    $("#result").html($("#myText").val());
});

//Magic 8 Ball

var tru = ["tru", "truu", "truuu", "truuuu", "truuuuu", "truuuuuu", "truuuuuuu", "truuuuuuuu"];
var random = Math.floor((Math.random() * 8));
var answer = tru[random];

$("#answer").on('click', function() {
    var magicInput = $("#myText2").val();

    if (magicInput.indexOf("?") > -1)
        {
           console.log(answer);
            var random = Math.floor((Math.random() * 8));
            var answer = tru[random];
            $("#result2").html(answer);
        }
    else
        {
        alert("Please ask a question");
        }
});