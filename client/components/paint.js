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
        repaint: repaint
    };
    return service;

    ////////////

    function paint() {
        console.log('painting..');
        console.log(w + ' ' + h);
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

        // var colors = [];
        // colorMethods.forEach(function (colorObj) {
        //     colors.push(colorObj.instance[colorObj.method](colorObj.attributes));
        // });

        // d3.selectAll('#board .pixies').each(function () {
        //     var _this = d3.select(this);
        //     var x = parseInt(_this.attr('x'), 10);
        //     var y = parseInt(_this.attr('y'), 10);
        //     var fill = "black";

        //     //check if we should color the current pixel
        //     colors.forEach(function (color) {
        //         var colorname = Object.keys(color)[0];
        //         color[colorname].forEach(function (colorCoords) {
        //             if(colorCoords.x === x && colorCoords.y === y) fill = colorname;
        //         });
        //     });

        //     _this.attr('fill', fill);
        // });
    };
};
