/**
 * Choose game
 */
var Games = require('./engine/games.js');
Games.init('mollymage');

var Point = require('./engine/point.js');
var Direction = Games.require('./direction.js');
var Element = Games.require('./elements.js');
var Board = Games.require('./board.js');
var Stuff = require('./engine/stuff.js');

var Solver = module.exports = {

    /**
     * paste here board page url from browser (board page) after registration
     */
    url : 'http://127.0.0.1:8080/codenjoy-contest/board/player/0?code=000000000000',

    /**
     * @return next hero action
     */
    get : function(board) {
        // TODO your code here

        return Direction.UP;
    }
};