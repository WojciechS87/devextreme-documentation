//<!--@Knockout-->
var myViewModel = {
    actionSheetVisible: ko.observable(false),
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
    showTitle: false,
    usePopover: true,
    target: '#showButton'
});
//<!--/@jQuery-->