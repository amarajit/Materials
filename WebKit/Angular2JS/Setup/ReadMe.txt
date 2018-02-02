

Inital Setup 
-----------------------
1. Downoad and install npm
2. Download and install VSCode (Visual Studio Code)
3. Download and install github cli (and github gui optional)
4. Install Typescript through npm as below:
	
		npm install -g typescript

5. Install Angular CLI
		
		npm install -g angular-cli

Creating Angular 2 Folder Structure
-=-=-=-=-=-=-=-==-=-=-=-=-=-=-

1. Clone quick start from https://github.com/angular/quickstart

ProjectFolder
	|
	|-package.json  (references all ajs2 modules that Node shall download)
	|-systemjs.config.js (configures SysemJS module loader)
	|-tsconfig.json (defines transpilling for typescript)
	|-typings.json (typescript support for old JS frameworks)
	
	
2. run 'npm install 'on the ProjectFolder.

Angular2 Directives
----------------------------------
	*ngModule
	[ngModel]
	[ngClass]
	[ngStyle]
	*ngIf
	*ngFor
	[ngSwitch]
	*ngSwitchCase
	*ngSwitchDefault
	
Angular 2 Pipes (Angular 1 Filters)
--------------------------------------------

Filter/Pipe Name		1.x	 2
-------------------------------
currency				✓	✓
date					✓	✓
uppercase				✓	✓
json					✓	✓
limitTo					✓	✓
lowercase				✓	✓
number					✓	
orderBy					✓	
filter					✓	
decimal						✓
percent						✓
async						✓

Angular CLI Commands
------------------------------
To get help
	ng help
	
To create a new proejct and start

	ng new PROJECT-NAME
	cd PROJECT-NAME
	ng serve

To change dev server ip or port

	ng serve --host <ip> --port <port>

To generate any angular object 
	
	ng g <objectType> object-name
	ng generate <objectType> object-name
	
	where objectType can be
		component
		directive
		pipe
		service
		class
		interface
		enum
		module
		gaurd
		
		

	
	
	

