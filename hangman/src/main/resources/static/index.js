$(function() {
    $.ajax({
        url: "hangman/getGames",
        success: (function (data) {
            data.forEach(function(game) {
                addRow(game);
            })
        })
    })

    $("#submit").click(function() {
        submitGame();
    })
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            submitGame();
        }
    });
})

function submitGame() {
    $.ajax({
        type: "POST",
        url: "hangman/newGame/" + $("#newGameText").val(),
        success: (function(game) {
            addRow(game);
        })
    })
    $("#newGameText").val("");
}

function addRow(game)
{
    $('#gameList tr:last').after('<tr><td>' + game.id + '</td><td>' + game.guessBoard + '</td><td>' + game.guessedLetters + '</td><td>' + game.gameOver + '</td><td><a href="game?id=' + game.id + '">Link to Game</a>');
}
