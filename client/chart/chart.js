Template.chart.rendered = function() {
    var data = [
    {
        value: 10,
        color:"#27AE60",
        highlight: "#2ECC71",
        label: "trifft zu"
    },
    {
        value: 10,
        color: "#16A085",
        highlight: "#1ABC9C",
        label: "trifft eher zu"
    }];

    Meteor.defer(function() {
        ChartDrawer.draw('canvas', 'pie', data);
    });
};
