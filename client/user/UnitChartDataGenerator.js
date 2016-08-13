UnitChartDataGenerator = {
    generate() {
        return {
            labels: [
                "Yes",
                "No",
                "Partially"
            ],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
    }
}
