﻿//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row"
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                }
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "amount",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        allowExpandAll: true
    });
    
    $("#textBoxContainer").dxTextBox({
        placeholder: "Type in a Text for the `Expand All` Menu Item...",
        value: 'Expand All',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('texts.expandAll', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    expandAllText: ko.observable('Expand All')
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.expandAllText = "Expand All";
        $scope.cityText = function (data) {
            return data.city + ' (' + data.country + ')';
        };
        $scope.sales = sales;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->