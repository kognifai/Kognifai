//typescript
module PoseidonWidgetsPackage {
    "use strict";

    interface INewInstrumentConfig {
        displayText: string;
    }

    export interface INewInstrumentConfigScope extends Poseidon.DisplayFramework.IWidgetContentScope<newInstrumentConfig> {
        config: newInstrumentConfig;
    }

    export class NewInstrumentController extends Poseidon.DisplayFramework.WidgetPropertyBaseController {
        private displayText: string;

        static $inject = ['$scope'];

        constructor(private scope) {
            super(scope);
            this.init(scope);
        }

        private init(scope: INewInstrumentConfigScope): void {
            if (scope.config) {

            }

            if (scope.header) {
                this.setConfigurationNodes(this.createConfigurationNodes(scope));
            }
        }

        private createConfigurationNodes(scope: INewInstrumentConfigScope): Poseidon.DisplayFramework.IWidgetPropertyConfigurationNode[] {
            var nodes: Poseidon.DisplayFramework.IWidgetPropertyConfigurationNode[] = [];

            var generalNode = new Poseidon.DisplayFramework.WidgetPropertyConfigurationNode('9725be3c-06a1-4b33-b136-1fcef62d86f4',
                'propcontext.newWidget.general', 'General', () => { });
            nodes.push(generalNode);

            return nodes;
        }
    }
};
