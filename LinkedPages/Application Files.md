#### Application Files
The template defines a folder layout for the files in the project to keep things more organized. The app folder contains instrument specific files such as TypeScript files and angular templates. The styles folder is a place for all styles. Use the assets folder for other resources, like images, fonts, etc. Keep in mind that the build process uses these folders to discover files for some build steps. If you change the names you should change the build process configuration as well.

#### SamplePoseidonInstrument.module.ts:
Here we define an angular module for this application. We use it to define other angular components. 

#### newInstrumentConfig.ts:
The instrument’s config file is used to define the configuration attributes/properties of the instrument.

#### newInstrumentController.ts:
In this file you should include any logic that defines how data is displayed in your instrument. You can also use the file to:

* create your property panel structure,
* define custom/private properties (aside from the ones in the ‘config’)


#### newInstrumentDataController.ts:
The actual angular controller of our instrument. In this file you should include any logic that defines how data is loaded and updated in the instrument.

#### newInstrumentDirective.ts:
Here an angular directive is created in Typescript. Created properties of return object as properties of directive class, which implements ng.IDirective. Then create factory function which implements ng.IDirectiveFactory which returns the new instance of directive, where we inject the dependencies for Directive.

#### newInstrumentRegister.ts:
Here we register the instrument in the ‘dashboardProvider’ service which will enable the Display Framework to see it and define the configuration attributes of the instrument
