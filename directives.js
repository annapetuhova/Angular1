angular
    .module("directivesModule", [])
    .directive("testcolor", function () {

        return {
            restrict: "A",
            require: "?ngModel",
            link: function ($scope, $element, attrs, ngModel) {
                if ($scope.i.priority == "Высокий") {

                    $element.css({ "color": "red" });

                }
                if ($scope.i.priority == "Средний") {

                    $element.css({ "color": "yellow" });

                }
                if ($scope.i.priority == "Низкий") {

                    $element.css({ "color": "green" });

                }
            }
        };
    });