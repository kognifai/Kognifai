//typescript
module PoseidonWidgetsPackage {
    "use strict";

    interface InewInstrumentDataConfigScope extends INewInstrumentConfigScope {
        config: newInstrumentDataConfig;
    }

    class NewInstrumentDataController extends NewInstrumentController {
        static $inject = ['$scope'];

        constructor(private dataScope: InewInstrumentDataConfigScope) {
            super(dataScope);
        }
    }

    angular.module("PoseidonWidgetsPackage").controller('NewInstrumentDataController', NewInstrumentDataController);
}
