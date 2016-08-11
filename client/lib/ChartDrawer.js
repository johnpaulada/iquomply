ChartDrawer = {
    draw(ctx, type, data, options = []) {
        var myChart = new Chart(ctx,{
            "type": type,
            "data": data,
            "options": options
        });

        return myChart;
    }
}
