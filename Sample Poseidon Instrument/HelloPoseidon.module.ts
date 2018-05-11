//typescript
module HelloPoseidon {
    angular.module('HelloPoseidon', ['Poseidon'])
        .config(function ($stateProvider: ng.ui.IStateProvider) {
            $stateProvider.state('094673d6-9cce-48c4-91ba-85d461e8e623', {
                url: '/HelloPoseidon',
                templateUrl: '/HelloPoseidon/mainView.html'
            });
        })
        .run(function (navigationService: Poseidon.INavigationService) {
            var appMenu = new Poseidon.NavigationItem('094673d6-9cce-48c4-91ba-85d461e8e623', '094673d6-9cce-48c4-91ba-85d461e8e623', null, 'HelloPoseidon.Title');

            // add subitems to the application menu item
            //appMenu.add(new Poseidon.NavigationItem(<menu item id>, <menu item state>, <menu item icon>, <menu item label>));

            // register the application menu item with the navigation service
            navigationService.registerApplication(appMenu);
        });
}
