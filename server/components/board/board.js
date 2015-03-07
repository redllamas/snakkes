var d3 = require('d3');

module.exports = function () {
    var w = 400;
    var h = 400;
    var pw = 10; //pixel width
    var ph = 10; //pixel height
    var scaleX = d3.scale.linear().domain([0, w]).range([0, w]);
    var scaleY = d3.scale.linear().domain([0, h]).range([0, h]);
    var ticksX = scaleX.ticks(w/pw);
    var ticksY = scaleY.ticks(h/ph);

    function meta() {
        return {
            pw: pw,
            ph: ph,
            boundsX: w,
            boundsY: h,
            ticksX: ticksX,
            ticksY: ticksY
        };
    };

    return {
        meta: meta
    };
}
