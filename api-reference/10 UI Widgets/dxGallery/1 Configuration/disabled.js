//<!--@Knockout-->
var myViewModel = {
    galleryData: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    disabledValue: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.galleryData = [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ];
    $scope.disabledValue = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myGallery").dxGallery({
    dataSource: [
        "/Content/images/doc/16_1/PhoneJS/person1.png",
        "/Content/images/doc/16_1/PhoneJS/person2.png",
        "/Content/images/doc/16_1/PhoneJS/person3.png",
        "/Content/images/doc/16_1/PhoneJS/person4.png"
    ],
    width: '100%',
    height: 370
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myGallery").dxGallery("instance").option("disabled", e.value);
    }
});
//<!--/@jQuery-->
