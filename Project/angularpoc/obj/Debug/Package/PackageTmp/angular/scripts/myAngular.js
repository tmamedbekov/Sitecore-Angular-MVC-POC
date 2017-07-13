angular.module('sc.sample', [
  'ngSanitize'
]).directive('sampleComponent', function () {
    return {
        scope: {
            data: '=sampleComponent'
        },
        templateUrl: `./angular/templates/angularTemplate.html`
    };
}).controller('SampleDemoController', ['$scope', function ($scope) {
    $scope.data = {
        Title: 'Title',
        Text: 'Text',
        Image: '<img src="">'
    };
}]).filter('asTrusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}])