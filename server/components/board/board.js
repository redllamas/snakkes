var d3 = require('d3');

module.exports = function () {
    var w = 400;
    var h = 400;
    var pw = 10;
    var ph = 10;
    var scaleX = d3.scale.linear().domain([0, w]).range([0, w]);
    var scaleY = d3.scale.linear().domain([0, h]).range([0, h]);
    var ticksX = scaleX.ticks(w/pw);
    var ticksY = scaleY.ticks(h/ph);

    function paint() {
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

    return {
        paint: paint
    };
}
