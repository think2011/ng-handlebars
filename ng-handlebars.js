(function () {
    angular
        .module('ng-handlebars', [])
        .directive('handlebars', handlebarsFunc);

    function handlebarsFunc($rootScope, $timeout) {
        return {
            restrict: 'EA',
            scope   : {
                cfgContent: '=',
                cfgParams : '=',
                model     : '=?'
            },
            link    : function (scope, element, attrs) {
                // model to view
                scope.$watch('cfgParams', function (newVal) {
                    scope.model = Handlebars.compile(scope.cfgContent)(newVal)
                    element.html(scope.model)
                })
            }
        }
    }
})();
