
__Welcome to Kognifai Application Framework__. This repository guides you to create your first Poseidon module, Widget, a Kognifai application and provides samples for each of them.

## Create Your First Module 
Creating Kognifai application has its own specifications as it is the  same case with any other platforms. Application Framework provides a Visual Studio project template to create the basic artefacts required by Kognifai. 

Also, we assume that you are currently running a development instance of Kognifai and have already completed the neccessary steps to run this instance.

## Install

To install and configure Kognifai Application Framework, refer to: 
* [Install and Configure Application Framework](https://github.com/kognifai/Core_Documentation/wiki).

## QuickStart
* [Step 1. Set up the Development Environment](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Set%20up%20the%20Development%20Environment.md)
* [Step 2. Create a new project](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Set%20up%20the%20Development%20Environment.md)
* [Step 3: Start the application](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Set%20up%20the%20Development%20Environment.md)


## Build your First Kognifai App
You can start building your first Koginifai App by using Yeoman, a scaffolding app. Yeoman app helps you to create the templates for your application. This article provides simple steps on how to use the Yeoman app and the sample codes to jump-start your application development.
* [Getting Started with Yeoman App](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Getting%20Started%20with%20Yeoman%20App.md)

## What will you get
After creating an empty kognifai application framework App based on the Yeoman template, you will get the following solution structure:

![](https://github.com/kognifai/Core_Documentation/blob/master/images/node_modules.png)

* HelloPoseidon.manifest.json

  The manifest file is used by the Poseidon Module Installer to register the new module in the DB.
  
   [sample HelloPoseidon.manifest.json code](https://github.com/kognifai/Core_Documentation/blob/master/Sample%20Poseidon%20Instrument/HelloPoseidon.manifest.json)
   
 * HelloPoseidon.module.ts
 
   In this file the root Angular module for the application is registered. Also some additional configuration can be performed, e.g.  creating a state, registering the app in the ‘navigationService’, etc.
   
    [sample HelloPoseidon.module.ts code](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/HelloPoseidon.module.ts)
 
 * mainView.html
 
     This is the main view of the new application. You can compose your content inside.
     
     [sample mainView.html code](https://github.com/kognifai/Core_Documentation/blob/master/HelloPoseidon/mainView.html)
     
* [Web.config](https://github.com/kognifai/Core_Documentation/blob/master/HelloPoseidon/Web.config)
* Locale-en.ts

    This file is responsible to store localization of the application. If localization is not a requirement it can be removed. 
    
* install-module.cmd

    This file simplifies the registration of the module in kognifai Application Framework.

* uninstall-module.cmd

    This file simplifies the uninstallation of the module in kognifai Application Framework.
  
 ## Create Sample Poseidon Instrument 
The successfull creation of an empty Poseidon Instruments Package results a sample instrument package structure that can be populated with instruments such as dashboard instruments. This article provides a sample code for a platform instrument that you can use to jump-start your development. 

![](https://github.com/kognifai/Core_Documentation/blob/master/images/Solution%20Poseidon.png)

## Sample Widget Package
The newly created sample Widgets Package project is the developer’s entry point for creating a new widget. User defined widgets are stored in the **widgets** project folder.
* [app > localization > Locale-en.ts](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20localization%20%3E%20Locale-en.ts)
* [styles > instruments > _newInstrument.scss](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/styles%20%3E%20instruments%20%3E%20_newInstrument.scss)
* app > instruments > newInstrument > newInstrument.html

   This is the main view of the new widget. Here you can compose its layout/content.
   
   [sample app > instruments > newInstrument > newInstrument.html](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrument.html)
* app > instruments > newInstrument > newInstrumentConfig.ts

   The widget’s config file is used to define the configuration attributes/properties of the widget.

   [ sample app > instruments > newInstrument > newInstrumentConfig.ts code](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentConfig.ts)
* app >  instruments > newInstrument > newInstrumentController.ts

   It defines how the data is displayed. You can also use the file to:
      * create your property panel structure,
      * define custom/private properties (aside from the ones in the ‘config’) 

   [sample app >  instruments > newInstrument > newInstrumentController.ts code](https://github.com/kognifai/Core_Documentation/blob/master/Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentController.ts)
   
* app > instruments > newInstrument > newInstrumentEdit.html

  In this markup file you should define how the property editing panel of your widget will be laid out.

  [ sample app > instruments > newInstrument > newInstrumentEdit.html](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentEdit.html)

* App > instruments > newInstrument > newInstrumentDataController.ts

  In this file you should include any logic that defines how data is edited and loaded in your widget. Also, it is responsible how the   data will be updated/refreshed.
  
  [sample App > instruments > newInstrument > newInstrumentDataController.ts](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentDataController.ts)
  
* App > instruments > newInstrument > newInstrumentDirective.ts

  It defines the web component that encapsulates the widget UI.
  
  [ sample App > instruments > newInstrument > newInstrumentDirective.ts](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentDirective.ts)
  
* App > instruments > newInstrument > newInstrumentRegister.ts

  It is used to bootstrap the widget and define its meta properties

  [sample App > instruments > newInstrument > newInstrumentRegister.ts code](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentRegister.ts)
* Application.manifest.json

  The manifest file is used by the Poseidon Module Installer to register the new module in the DB.

  [sample Application.manifest.json](https://github.com/kognifai/Core_Documentation/blob/master//Sample%20Poseidon%20Instrument/Application.manifest.json)
* package.json

  The package.json file lists your modules/dependencies and configures how ‘npm’ should behave when installing them.

  [sample package.json](https://github.com/kognifai/Core_Documentation/blob/master/Sample%20Poseidon%20Instrument/package.json)
* [Web.config](https://github.com/kognifai/Core_Documentation/blob/master/Sample%20Poseidon%20Instrument/Web.config_1)

## Sample Poseidon instrument

#### Quick Start
* [Step 1. Set up the Development Environment](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Sample%20Poseidon%20Instruments%20Package.md)
* [Step 2. Create a new project](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Sample%20Poseidon%20Instruments%20Package.md)
* [Step 3. Run the instrument in the platform](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Sample%20Poseidon%20Instruments%20Package.md)

### Basic use
* [Application Files](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Application%20Files.md)
* [Build Process ](https://github.com/kognifai/Core_Documentation/blob/master/LinkedPages/Build%20Process.md)


## License
Read the copyright information and terms and conditions for Usage and Development of the software [here]
