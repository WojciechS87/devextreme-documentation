var dataSource = [
	{ direction: 'N', day: 1, night: 5 },
	{ direction: 'NE', day: 1, night: 1 },
	{ direction: 'E', day: 10, night: 1 },
	{ direction: 'SE', day: 1, night: 1 },
	{ direction: 'S', day: 5, night: 2 },
	{ direction: 'SW', day: 7, night: 8 },
	{ direction: 'W', day: 1, night: 3 },
	{ direction: 'NW', day: 0, night: 3 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        title: "Wind Rose, Madrid (October 2014)",
        commonSeriesSettings: {
            type: "line",
            argumentField: 'direction'
        },
        series: [
            { valueField: "day", name: 'day' },
            { valueField: "night", name: 'night' }
        ],
        argumentAxis: {
            discreteAxisDivisionMode: "crossLabels",
            firstPointOnStartAngle: true
        },
        valueAxis: {
            strips: [{
                startValue: 0,
                endValue: 2
            }, {
                startValue: 4,
                endValue: 6
            }, {
                startValue: 8,
                endValue: 10
            }],
            stripStyle: { color: "Beige" }
        }
    });
});