var Player = require('../player/player');
var players = [];
var scores = [];

module.exports.list = scores;

// add scores
module.exports.addScore = function () {
  var currentScore = scores[0];
  var newScore += currentScore;
  scores[0] = newScore;
};

// get scores from player
module.exports.getScore = function (players, score) {
  players.forEach(function (score) {
    scores.push(score);
  });
};

// set scores

module.exports.setScore = function (score, players) {
  scores.forEach(function (score) {
    players.forEach(function (player) {
      score = newScore;
    });
  });
};

// tell scores
module.exports.tellScores = function(scores) {
  return scores[0];
};
