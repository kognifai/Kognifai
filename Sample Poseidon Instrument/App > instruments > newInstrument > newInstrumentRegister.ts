// typescript
module PoseidonWidgetsPackage {

    angular.module('PoseidonWidgetsPackage').config(newInstrumentConfigFunction);

    newInstrumentConfigFunction.$inject = ['displayWidgetsProvider'];

    function newInstrumentConfigFunction(dashboardProvider: Poseidon.DisplayFramework.IDashboardWidgetsProvider): void {
        var instrument: Poseidon.DisplayFramework.IWidget =
            {
                title: 'New Instrument Test',
                description: 'Automatically created instrument Test',
                category: 'Custom2',
                template: '<new-instrument></new-instrument>',
                //templateUrl: '/PoseidonWidgetsPackage/instruments/newInstrument/newInstrument.html',
                controller: 'NewInstrumentDataController',
                controllerAs: 'vm',
                reload: false,
                config: new newInstrumentDataConfig(),
                edit: {
                    templateUrl: '/PoseidonWidgetsPackage/app/instruments/newInstrument/newInstrumentEdit.html'
                }
            }

        dashboardProvider.registerWidget('NewInstrument', instrument);
    }
}
