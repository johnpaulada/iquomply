ChartDrawer = {
    draw(id, type, data, options = []) {
        var ctx = $('#canvas').get(0).getContext("2d");

        // For a pie chart
        var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: data,
            options: options
        });
    }
}
