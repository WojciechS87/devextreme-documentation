﻿$(function () {
    $('#mapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt'
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.attribute('name')
                };
            }
        }
    });

    $('#enableTooltipCheckbox').change(function () {
        var vectorMap = $('#mapContainer').dxVectorMap('instance');
        vectorMap.option({
            tooltip: {
                enabled: this.checked
            }
        });
    });
});