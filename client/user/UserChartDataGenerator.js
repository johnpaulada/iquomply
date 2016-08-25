UserChartDataGenerator = {
    generate() {
        return {
            labels: [
                "Complete",
                "Incomplete",
            ],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ]
            }]
        };
    }
}
