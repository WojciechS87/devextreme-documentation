//<!--@Knockout-->
var myViewModel = {
    actionSheetVisible: ko.observable(false),
    showCancelButtonValue: ko.observable(true),
    actionSheetData: [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ],
    showActionSheet: function () {
        this.actionSheetVisible(true);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.actionSheetVisible = false;
    $scope.showCancelButtonValue = true;
    $scope.actionSheetData = [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ];
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#showButton").dxButton({
    text: 'Show action sheet',
    onClick: function () {
        $("#myActionSheet").dxActionSheet("instance").show();
    }
});
$("#myActionSheet").dxActionSheet({
    dataSource: [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ],
    title: 'Choose action',
    showTitle: true
});
$("#showCancelButtonSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myActionSheet").dxActionSheet("instance").option("showCancelButton", e.value);
    }
});
//<!--/@jQuery-->