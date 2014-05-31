'use Strict'
/* Controllers */
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function ($scope, $http) {

    $scope.mySelections = [];

    $scope.myData = [];

    $http.get('/demo/PersonsList').
        success(function (data, status, headers, config) {
            $scope.myData = data;
        });

    $scope.gridOptions = {
        data: 'myData',
        columnDefs: [
        { field: 'first_name', displayName: 'First Name' },
        { field: 'last_name', displayName: 'Last Name' },
        { field: 'address', displayName: 'Address' },
        { field: 'city', displayName: 'City' },
        { field: 'state', displayName: 'State' },
        { field: 'company_name', displayName: 'Company Name' }
        ],
        selectedItems: $scope.mySelections,
        multiSelect: false,
        filterOptions: { filterText: '', useExternalFilter: false },
        showFilter: true
    };
});

