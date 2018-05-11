#### Getting Started with Yeoman App

To get started with the Yeoman app, you will need nodejs version 8 or above to run the app. The Yeoman application is based on generators that allows users to generate their own files or generators to run the application. 

#### Step 1. The first step is to install Yeoman. Use the following code for installation:
```
npm install -g yo
```
#### Step 2. Install latest version of the yeoman Poseidon module template
```
npm install -g generator-kognifai-poseidon-module
```
#### Step 3. Install the slim local Poseidon hosting app
```
npm install -g poseidon-local
```
#### Step 4.  Create a folder where you have your modules.  See the example below
```
C:\modules
```
This is how you create a test folder and have your modules there:
```
mkdir test-module
cd test-module
yo kognifai-poseidon-module
```
> NOTE Enter the details in the yeoman “wizard”

#### Step 5.  Build the module
```
gulp build
```
> NOTE You can also open it in vs code and make your changes there.

#### Step 6.  Start the host and scan the folder of your modules
```
poseidon-local --port 8080 c:\modules
```
> NOTE It is recommended to use only 8080 port.  Using other ports may not work at the moment. 

