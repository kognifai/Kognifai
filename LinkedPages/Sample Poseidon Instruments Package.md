#### Step 1. Set up the Development Environment
To install the Poseidon Tools extension for Visual Studio download Kognifai template extensions.vsix from 

https://github.com/kognifai/GST-Intruments/tree/master/Visual%20Studio%20Extensions 
and start it.

#### Step 2. Create a new project
After that you can simply create a new Poseidon Instrument Package from Visual Studio which will provide us with basic necessary files required by a Kognifai instrument. To create a new instrument project, choose **File**, **New Project** option and select the **Poseidon Instrument Package** template in the **TypeScript** section. Enter the name of the project. 

For example **SamplePoseidonInstrument**:

![](https://github.com/chrisjohn727/sample/blob/master/images/SamplePoseidonInstrument.png)

#### Step 3: Run the instrument in the platform

Now we need to build our new project. 
Wait the npm to download all of its packages and when the build finishes right-click on the project from the source in the solution explorer. Choose Properties and then Web from the left navigation menu:

![](https://github.com/chrisjohn727/sample/blob/master/images/SamplePoseidonInstrument_Web.png)

Select Local IIS from the dropdown and enter the correct path to Poseidon local IIS instance + the base path to application files Server/Modules/SamplePoseidonInstrument. 
* [Poseidon.Module.Installer.exe](https://github.com/chrisjohn727/sample/blob/master/App%20Framework/Poseidon.Module.Installer)

We need to use the Poseidon Module Installer tool in order to register our new application. In the generated project there is already a cmd scripts that invokes the installer. First we need to ensure that the path to Poseidon.Module.Installer.exe is correct in the install-module.cmd file located in the newly created project:

Then simply run install-module.cmd and “Module installed successfully” message should be shown.
In order to open the new instrument, just browse your local Kognifai instance. 
Open New Dashboard from Dashboards application in Tools menu and then open Toolbox menu from right upper corner of the screen. Then you should see our newly created SamplePoseidonInstrument located in ‘Custom’ category.

![](https://github.com/chrisjohn727/sample/blob/master/images/Toolbox.png)

Add it to your Dashboard:

![](https://github.com/chrisjohn727/sample/blob/master/images/Dashboard.png)

What you see is actually the code from newInstrument.html file located in app/instruments/newInstrument folder.
If you click on the wheel at the top right corner of the instrument you will see the editing panel. The markup for it is located also in app/instruments/newInstrument folder of your project at newInstrumentEdit.html file.

![](https://github.com/chrisjohn727/sample/blob/master/images/General.png)

We have created a very basic Kognifai instrument.
