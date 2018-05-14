//typescript
module PoseidonWidgetsPackage {
    'use strict';

    export class newInstrumentConfig implements Poseidon.DisplayFramework.IWidgetConfiguration {
        title: string = '';
        hyperlink: Poseidon.DisplayFramework.IWidgetHyperlink;
        lineHeight: number = 0;

        constructor() {
            this.title = 'New Instrument';
            this.hyperlink = <Poseidon.DisplayFramework.IWidgetHyperlink>{
                enabled: false,
                type: Poseidon.Dashboards.HyperlinkType.None,
                popupTitle: "New Instrument Popup Title"
            };
            this.lineHeight = 15;
        }
    }

    export class newInstrumentDataConfig extends newInstrumentConfig {
        getInstrumentAddresses: () => Poseidon.Dashboards.ICollectedAsset[];

        constructor() {
            super();
        }
    }
}
