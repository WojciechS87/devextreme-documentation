$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.312, 14.833, -30.91, 45.2, 7],
        palette: 'Vintage',
        tooltip: {
            enabled: true,
            font: {
                color: 'midnightblue',
                size: 16,
                weight: 200,
                family: 'Segoe UI'
            }
        }
    });
});