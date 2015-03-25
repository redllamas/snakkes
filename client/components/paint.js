'use strict';

angular
    .module('app')
    .factory('paint', paint);

paint.$inject = [];

function paint() {
    var board = require('../../server/components/board/board')().meta();
    var ticksX = board.ticksX;
    var ticksY = board.ticksY;
    var w = board.boundsX;
    var h = board.boundsY;
    var pw = board.pw;
    var ph = board.ph;
    var service = {
        paint: paint,
        repaint: repaint,
        updateScores: updateScores
    };
    return service;

    ////////////

    function paint() {
        d3.select("#game").append("svg").attr("width", w).attr("height", h).append("g").attr("id", "board");

        ticksX.map(function (xTick) {
            ticksY.map(function (yTick) {
                d3.select("#board")
                    .append("rect")
                    .attr("x", xTick)
                    .attr("y", yTick)
                    .attr("width", pw)
                    .attr("height", ph)
                    .attr("class", "pixies")
                    .attr("fill", "black");
            });
        });
    };

    function repaint(colors) {

        d3.selectAll('#board .pixies').each(function () {
            var _this = d3.select(this);
            var x = parseInt(_this.attr('x'), 10);
            var y = parseInt(_this.attr('y'), 10);
            var fill = "black";

            colors.forEach(function (color) {
                if(color.x === x && color.y === y) fill = color.color;
            });

            _this.attr('fill', fill);
        });

    };

    function updateScores (scores) {
        var localScores = [];
        scores.forEach(function (score) {
            localScores.push(score);
        });
        d3.selectAll('.score')
            .data(localScores)
            .text(function(score) { return score; });


        // d3.selectAll('.score').each(function () {
        //     var _this = d3.select(this);
        //     var score = parseInt(_this.attr('score'), score);
            
        //     scores.forEach(function (score) {
        //         return score;
        //     });

        //     _this.attr('score', score);
        // });
    };
};
