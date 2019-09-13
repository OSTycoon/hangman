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
        $.ajax({
            type: "POST",
            url: "hangman/newGame/" + $("#newGameText").val(),
            success: (function(game) {
                addRow(game);
            })
        })
    })
})

function addRow(game)
{
    $('#gameList tr:last').after('<tr><td>' + game.id + '</td><td>' + game.guessBoard + '</td><td>' + game.guessedLetters + '</td><td>' + game.gameOver + '</td><td><a href="game?id=' + game.id + '">Link to Game</a>');
}