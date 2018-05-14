//typescript
module MyPoseidonWidgetsPackage1 {

    angular

        .module('MyPoseidonWidgetsPackage1')

        .config(function ($translateProvider: ng.translate.ITranslateProvider) {

            $translateProvider.translations('en', {

                'MyPoseidonWidgetsPackage1': {

                    Title: 'MyPoseidonWidgetsPackage1'

                }

            });

        });
