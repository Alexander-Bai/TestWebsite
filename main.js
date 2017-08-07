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

//mindreader
    // pseudorandom object generator
    var guesses = ['h', 't']
    var random;
    var winning = 10;
    var computerScore = 0;
    var playerScore = 0;
    var playerGuess;
    $("#angry").hide();
    $("#happy").hide();
    $("#win").hide();
    $("#lose").hide();
    $("#mindreader").on("click", function() {
        playerGuess = $("#hort").val();
        random = guesses[Math.floor(Math.random() * guesses.length)];
        console.log(random);
        if (!(playerGuess.indexOf("h") > -1 || playerGuess.indexOf("t") > -1))
        {
           playerGuess = "";
           alert("Please enter h or t");
        }
        var computerGuess = random;
        if (computerGuess === playerGuess)
        {
            console.log("Yes!  I too predicted " + computerGuess);
            computerScore++;
            $("#happy").show();
            $("#initial").hide();
            $("#angry").hide();
        }
        else
        {
            console.log("No.  I predicted " + computerGuess);
            playerScore++;
            $("#angry").show();
            $("#initial").hide();
            $("#happy").hide();
        }
           console.log('player: ' + playerScore + ' / computer: ' + computerScore);
        $("#hort").val('');
        if (playerScore === winning)
        {
            console.log("You win!");
            $("#gameover").hide();
            $("#happy").hide();
            $("#angry").hide();
            $("#win").show();
        }
        else if (computerScore === winning)
        {
            console.log("Sorry, you lost");
            $("#gameover").hide();
            $("#happy").hide();
            $("#angry").hide();
            $("#lose").show();
        }
    })

//hangman

