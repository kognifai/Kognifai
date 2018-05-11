### Build Process
The build process of the project is extended by using gulp tasks integrated with the MSBuild process. It should be noted that the template does not cover the automatic generation of deployment files at this point.

Gulp is a node.js module that supports the definition and execution of build tasks. It uses a pipe/filter architecture. In a standard flow you first use read a bunch of files into a stream, then you apply various transformations and finally write the result to the file system. Gulp itself provides just the bare minimum to do that. Everything else is handled by other npm modules.
The central file to the build process is gulpfile.js. Here we use standard node.js syntax to imperatively define various useful build tasks.

``` typescript
gulp.task('default', ['help']);

gulp.task('help', listing);

if (args.release) {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            ['optimize'],
            callback);
    });
}
else {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            //'compile:tests',
            //'run:unittests',
            callback);
    });
}

gulp.task('watch', ['watch:typescript', 'watch:styles', 'watch:templates']);

gulp.task('clean', ['clean:typescript', 'clean:styles', 'clean:templates', 'clean:dependencies', 'clean:database-scripts']);
```
They can be invoked by using command line. The build and clean tasks are directly tied to the MSBuild process and can be triggered from Visual Studio.


| Build tasks |Description / Definition |
| --- | --- |
| gulp help | Returns a list of available commands |
| gulp build | Performs a standard development build. This task creates the templates.js file from all 
templates found under the app/ folder and compiles sass files found in the styles folder. 
The output is found inside the build/ folder |
| gulp build -r | Performs a release build. There is an additional minification step for JavaScript and CSS files. |
| gulp watch | Starts an ongoing process that watches for changes to templates and sass files. The appropriate files are regenerated when a change is detected. |

Step 4 : Edit your first Poseidon Application to use User Settings App Framework Service

In order to create a simple form using the Poseidon User Settings framework service we need to first add a controller. Right-click on app folder in our new project from solution explorer and add new item and choose typescript file named SamplePoseidonAppController.ts and define an external module with an exported class which we will use for our logic.
``` typescript
module SamplePoseidonApp {
    "use strict";

    export class SamplePoseidonAppController {
}
angular.module('SamplePoseidonApp').controller('SamplePoseidonAppController', SamplePoseidonAppController);
}
```
We can pass values of different types to the User Settings service as a parameter and to illustrate that we will add an interface for the settings properties with two fields - name and age:
```typescript
export interface ISampleAppUserSettings {
        	name?: string;
        	age?: number;
}
```
Second thing is to add support for user settings to our controller. Simply add 
```typescript
constructor(private userSettings: Poseidon.IUserSettings) {
       }
```
In order to work with the available properties and methods we need to add also the scope object which is available for both the view and the controller.
```
constructor(private $scope: ISampleAppUserSettings, 
            	     private userSettings: Poseidon.IUserSettings) {
}
``` typescript
The scope is the binding part between the HTML (view) and in our case the Typescript (controller). In order to inject dependencies you can use $inject property. Simply put, this is an array which contains the names of your injections in the same order as your parameters .When you include that in your controller (or any other Angular component), the Angular compiler will take advantage of that instead of using the parameters in your constructor. The tricky part here is that this property needs to be defined as part of the class and not as part of an instance of the class. In the class based object oriented world, this is called a static. Let’s change our controller then.
```
       static $inject = ['$scope', 'userSettings'];
constructor(private $scope: ISampleAppUserSettings, 
       private userSettings: Poseidon.IUserSettings) {
}
```
Dependency injection in angular is simple in its basic form. You define your services/factories/controllers/whatever through an Angular module and then you use function parameters to inject these in other places.

Now let’s create the html form that we will use:
```typescript
<div>
    <h1 >No value stored in User Setting</h1>
    <h1 >User Settings are available. The name of the user is ---. The age of the user is: ---. </h1>
   
    <div >
        <label for="name">Name:</label>
        <input type="text" name="name" />
    </div>

    <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" name="age" />
    </div>

    <div>
        <input type="button" value="Save">
    </div>
</div>
```
To add some good look of the form we can use some bootstrap components which:
```typescript
<div class="container">
    <h1>No value stored in User Setting</h1>
    <h1>User Settings are available. The name of the user is ---. The age of the user is: ---. ></h1>
   
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" />
    </div>

    <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" class="form-control" name="age" />
    </div>

    <div>
        <input type="button" value="Save" class="btn btn-default">
    </div>

    <div class="alert alert-success form-group" role="alert">You have successfully stored your personal details!</div>
</div>
```
In order to start using the controller with the view we will use "controller as" syntax. It allows you to define an identifier for the controller instance that is controlling your view. This means you can then access properties of that controller.
``` typescript
<div ng-controller="ExampleController as example">
    <input type="text" ng-model="example.message" />
</div>
```
This syntax is an alternative to the controller defining data directly on the scope. It is particularly useful when working with TypeScript, which have a nice class syntax. We can define a controller as a class, with properties for the data to display and methods that handle UI events.

So we can add ng-controller="SamplePoseidonAppController as vm" to our div and bind the inputs with the controller using ng-model="settingValue.name":
```
div class="container" ng-controller="SamplePoseidonAppController as vm">
<h1 ng-show="isLabelShown">No value stored in User Setting</h1>
<h1 ng-show="!isLabelShown">User Settings are available. The name of the user is &nbsp;<u><i>{{settingValue.name}}</i></u>. The age of the user is: &nbsp;<u><i>{{settingValue.age}}</i></u></h1>

<div class="form-group">
     <label for="name">Name:</label>
     <input type="text" class="form-control" ng-model="settingValue.name" name="name" />
</div>

<div class="form-group">
     <label for="age">Age:</label>
     <input type="number" class="form-control" ng-model="settingValue.age" name="age" />
</div>
<div ng-show="isSuccessAlertShown" class="alert alert-success form-group" role="alert">You successfully have stored your personal details!</div>
</div>
```
We should add those properties in the controller but first we can create another exported interface for the properties which we will use in our App as a scope:
``` typescript
export interface ISampleAppUserScope {
        isLabelShown: boolean;
        isSuccessAlertShown: boolean;
        isSettingTypeExisting: boolean;
        settingValue: ISampleAppUserSettings;
    }
```
And modify $scope in the constructor to use it instead of ISampleAppUserSettings.
We should also modify the body of the constructor and initialize settingValue and isSuccessAlertShown.
``` typescript
$scope.settingValue = {};
this.$scope.isSuccessAlertShown = false;
```
In order to add or modify a UserSetting we need to have a SettingType with the same SettingTypeID. In order to do that we need to execute a simple SQL insert statement using the Platform Database which Application Framework is using: 
```
INSERT INTO [UserSettings].[SettingType] (SettingTypeName, ModuleID)
        VALUES ('PersonSetting', '6cebe3af-27de-4304-9a66-7cfa105f278d');
```
The first one is SettingType name and the second one is unique GUID for the module.
Now we should add them to our controller as a constants:
```
private readonly MODULE_ID: string = '6cebe3af-27de-4304-9a66-7cfa105f278d';
       private readonly SETTING_NAME: string = 'PersonSetting';
```
Next thing we should do is to add methods to read and write to the UserSettings:
To read:
```
public get(): void {
this.userSettings.get(this.MODULE_ID, this.SETTING_NAME).then((res: ISampleAppUserSettings) => {
                if (res == null)
                {
                    this.$scope.isLabelShown = true;
                }
                else
                {
                    this.$scope.settingValue.name = res.name;
                    this.$scope.settingValue.age = res.age;
                    this.$scope.isLabelShown = false;
                }
            });
        }
```
To set:
```
public set(): ng.IPromise<void> {
return this.userSettings.set(this.MODULE_ID, this.SETTING_NAME, this.$scope.settingValue);
       }
```
And initialize get at the constructor: 
```
this.get();
```
Add this to the body of the constructor.

One last thing to do is to tell the controller what to happen when we click the “Save” button of our form:
```
public insertValue() {
            if (this.$scope.settingValue.name != null) {
                this.set().then(x => {
                    this.$scope.isSuccessAlertShown = true;
                    this.$scope.isLabelShown = false;
                });
            }
        }
```
We need also to bind this method to click event of the button using Angular directive
```
<div ng-click="vm.insertValue()">
          <input type="button" value="Save" class="btn btn-default">
       </div>
```
Now just build the project and browse the Poseidon website. Navigate to our newly created app and try to pass some data to the User Settings Service by filling Name and Age and then clicking on Save button.  
