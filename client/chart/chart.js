Template.chart.onRendered(function() {
    var ctx = this.$('canvas').get(0).getContext('2d');

    ChartDrawer.draw(ctx, this.data.type, this.data.data);
});
