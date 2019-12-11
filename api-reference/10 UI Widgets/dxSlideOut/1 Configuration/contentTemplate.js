﻿var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        { name: "Michael A. Blevins", phone: "530-480-1961", email: "MichaelABlevins@armyspy.com", category: "Favorites" },
        { name: "Jane K. Hernandez", phone: "404-781-0805", email: "JaneKHernandez@teleworm.us", category: "Friends" },
        { name: "Kim D. Thomas", phone: "603-583-9043", email: "KimDThomas@teleworm.us", category: "Work" },
        { name: "Angel H. Padgett", phone: "772-766-2842", email: "AngelHPadgett@jourrapide.com", category: "Family" },
        { name: "Donald L. Jordan", phone: "213-812-8400", email: "DonaldLJordan@dayrep.com", category: "Friends" },
        { name: "Barbara M. Roberts", phone: "614-365-7945", email: "BarbaraMRoberts@armyspy.com", category: "Friends" },
        { name: "Leslie S. Alcantara", phone: "313-881-9719", email: "LeslieSAlcantara@teleworm.us", category: "Work" },
        { name: "Chad S. Miles", phone: "269-718-9780", email: "ChadSMiles@rhyta.com", category: "Friends" },
        { name: "Sherryl C. Flowers", phone: "919-469-3285", email: "SherrylCFlowers@armyspy.com", category: "Friends" },
        { name: "Merle L. Stearns", phone: "213-995-1064", email: "MerleLStearns@jourrapide.com", category: "Friends" },
        { name: "Nicole A. Rios", phone: "240-416-4329", email: "NicoleARios@armyspy.com", category: "Friends" },
        { name: "James L. Parker", phone: "949-265-2198", email: "JamesLParker@teleworm.us", category: "Friends" },
        { name: "Erin G. Goodson", phone: "425-208-5408", email: "ErinGGoodson@rhyta.com", category: "Friends" },
        { name: "Lelia J. Stewart", phone: "580-302-0390", email: "LeliaJStewart@rhyta.com", category: "Family" },
        { name: "Debra B. Abbott", phone: "806-675-3359", email: "DebraBAbbott@jourrapide.com", category: "Work" },
        { name: "Sandra M. Perez", phone: "586-920-6315", email: "SandraMPerez@dayrep.com", category: "Friends" },
        { name: "Elaine R. Coats", phone: "262-397-2323", email: "ElaineRCoats@rhyta.com", category: "Friends" }
];

//<!--@Knockout-->
var myViewModel = {
    slideOutData: ["All", "Family", "Favorites", "Friends", "Work"],
    listData: new DevExpress.data.DataSource(contacts),
    selectedCategory: ko.observable("All"),
    categoriesVisible: ko.observable(false),
    showCategories: function(){
        this.categoriesVisible(true);
    },
    selectionChanged: function (e) {
        this.listData.filter(e.addedItems[0] === "All" ? null : ["category", e.addedItems[0]]);
        this.listData.load();
        this.selectedCategory(e.addedItems[0]);
        this.categoriesVisible(false);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.slideOutData = ["All", "Family", "Favorites", "Friends", "Work"],
    $scope.listData = new DevExpress.data.DataSource(contacts),
    $scope.selectedCategory = "All";
    $scope.categoriesVisible = false;
    $scope.showCategories = function () {
        $scope.categoriesVisible = true;
    }
    $scope.selectionChanged = function (e) {
        $scope.listData.filter(e.addedItems[0] === "All" ? null : ["category", e.addedItems[0]]);
        $scope.listData.load();
        $scope.selectedCategory = e.addedItems[0];
        $scope.categoriesVisible = false;
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var listData = new DevExpress.data.DataSource(contacts);
$("#mySlideOut").dxSlideOut({
    dataSource: ["All", "Family", "Favorites", "Friends", "Work"],
    contentTemplate: function (contentElement) {
        var button = $("<div class=\"button\">");
        button.dxButton({
            text: 'Select category',
            onClick: function () {
                $("#mySlideOut").dxSlideOut("instance").showMenu();
            }
        })
        var list = $("<div>");
        list.dxList({
            dataSource: listData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<div>" + itemData.name + "</div>");
                itemElement.append("<div>" + itemData.phone + "</div>");
                itemElement.append("<div>" + itemData.email + "</div>");
            }
        });
        contentElement.append("<p class=\"header\">Current category: <b id=\"category\">All</b></p>");
        contentElement.append(button);
        contentElement.append(list);
    },
    onSelectionChanged: function (e) {
        listData.filter(e.addedItems[0] === "All" ? null : ["category", e.addedItems[0]]);
        listData.load();
        $("#category").text(e.addedItems[0]);
        $("#mySlideOut").dxSlideOut("instance").hideMenu();
    }
});
//<!--/@jQuery-->
