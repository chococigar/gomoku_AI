var player_status = "Player A with O<br>Player B with X"

var board_size = 10;

var board = '<table style="width:80%"><tr><th></th>'
var A_move = [];
var B_move = [];
var turn = 0;

var searchArray = function(haystack, needle) {
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length) {
                console.log(j);
                return i;
            }
        }
    }
    return -1;
}


var whoseTurn = function() {
    if (turn % 2 == 0) return "A's turn";
    else return "B's turn";
}

var loadBoard = function() {
    var board = '<table style="width:60%"><tr><th></th>'
    console.log("board lodaded")
    for (i = 0; i < board_size; i++) {
        board += '<th>' + i + '</th>'
    }
    board += '</tr>'
    for (i = 0; i < board_size; i++) {
        board += '<tr><th>' + i + '</th>';
        for (j = 0; j < board_size; j++) {
            if (searchArray(A_move, [i, j]) != -1) {
                board += '<th>O</th>';
                console.log("already in");
            } else if (searchArray(B_move, [i, j]) != -1) {
                board += '<th>X</th>';
                console.log("already in");
            } else board += '<th><a href="#" onclick="MyFunction(' + i + ',' + j + ')">-</a></th>'
        }
        board += '</tr>'
    }
    document.getElementById("board").innerHTML = board;
    document.getElementById("whose_turn").innerHTML = whoseTurn();
    return board;
}

var checkWinner = function(player) {
    if (player == "A") {
        console.log(A_move);


    } else if (player == "B") {
        console.log(B_move);
    }

}


var movedTo = function(i, j, player) {
    if (player == "A") A_move.push([i, j]);
    else if (player == "B") B_move.push([i, j])
    loadBoard();
    checkWinner(player);
};

var MyFunction = function(i, j) {
    console.log(i, j);
    turn += 1;
    if (turn % 2 == 1) movedTo(i, j, "A");
    else movedTo(i, j, "B");

};


$('document').ready(function() {
    document.getElementById("whose_turn").innerHTML = whoseTurn();
    document.getElementById("player_status").innerHTML = player_status;
    document.getElementById("board").innerHTML = loadBoard();
})