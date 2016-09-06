Template.chart.onRendered(function() {
    var ctx   = this.$('canvas').get(0).getContext('2d');
    var chart = ChartDrawer.draw(ctx, this.data.type, this.data.data);

    if (this.data.click) {
        var clickHandler = this.data.click;

        this.$('canvas').on('click', function(evt) {
            var activeElement = chart.getElementAtEvent(evt);
            clickHandler(activeElement[0]._model);
        });
    }
});
