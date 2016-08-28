UserChartDataGenerator = {
    generate() {
        return {
            labels: [
                "Complete",
                "Incomplete",
            ],
            datasets: [{
                data: [1, 1],
                backgroundColor: [
                    "#27ae60",
                    "#bdc3c7"
                ],
                hoverBackgroundColor: [
                    "#2ecc71",
                    "#ecf0f1"
                ]
            }]
        };
    }
}
