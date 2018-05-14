//typescript
module PoseidonWidgetsPackage {
    'use strict';

    interface INewInstrumentDirectiveScope extends INewInstrumentConfigScope {
    }

    class newInstrumentDirective implements ng.IDirective {
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

        static factory(): ng.IDirectiveFactory {
            var directive = () => {
                return new newInstrumentDirective();
            };
            return directive;
        }

        constructor() {
            this.link = (scope: INewInstrumentDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            };
        }

        restrict = 'E';
        templateUrl = '/PoseidonWidgetsPackage/instruments/newInstrument/newInstrument.html';
        replace = true;
    }

    angular.module('PoseidonWidgetsPackage').directive('newInstrument', newInstrumentDirective.factory());
}
