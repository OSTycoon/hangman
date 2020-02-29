$(function() {
    var hidden = false;
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
    $("#hideInput").change(function() {
        if(hidden)
        {
            $("#newGameText").attr('type', 'text');
            hidden=!hidden
        }
        else
        {
            $("#newGameText").attr('type', 'password');
            hidden=!hidden
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
    var numberOfRows = $('#gameList').children().length;
    var insertData = '<tr><td>' + game.id + '</td><td>' + game.guessBoard + '</td><td>' + game.guessedLetters + '</td><td>' + game.gameOver + '</td><td><a href="game?id=' + game.id + '">Link to Game</a>';
    if (numberOfRows <= 1)
    {
        $('#gameList tbody').last().after(insertData);
    }
    else
    {
        $('#gameList tbody').first().after(insertData);
    }
    
}
