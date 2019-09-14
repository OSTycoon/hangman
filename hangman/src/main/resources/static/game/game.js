$(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    $.ajax({
        url: "/getGame/" + id,
        success: (function (data) {
            updateGame(data)
        })
    })
    $("#submit").click(function() {
        $.ajax ({
            type: "PUT",
            url: "/guessLetter/" + id + "/" + $("#letterToGuess").val(),
            success: (function(data) {
                $("#letterToGuess").val("");
                updateGame(data)
            })
        })
    })

    function updateGame(game) {
        console.log("Updating Game")
        $("#guessBoard").html(game.guessBoard)
        $("#guessedLetters").html(game.guessedLetters)
        if (game.gameOver)
        {
            $("#submit").prop("disabled", true)
            if (game.numberOfFailedGuesses < 6)
            {
                $("#status").html("You Win")
            }
        }
        switch (game.numberOfFailedGuesses) {
            case 0:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 1:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |     O<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 2:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |     O<br>")
                $("#picture").append("     |     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 3:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |    \\O<br>")
                $("#picture").append("     |     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 4:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |     \\O/<br>")
                $("#picture").append("     |     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 5:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |     \\O/<br>")
                $("#picture").append("     |     |<br>")
                $("#picture").append("     |    /<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                break
            case 6:
                $("#picture").html("")
                $("#picture").append("     ______<br>")
                $("#picture").append("     |     \\O/<br>")
                $("#picture").append("     |     |<br>")
                $("#picture").append("     |    / \\<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("     |<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#picture").append("+++++++++++++++<br>")
                $("#status").html("You Lose")
                break
        }
    }
})