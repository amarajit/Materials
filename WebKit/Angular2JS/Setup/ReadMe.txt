
Initial Setup 
-----------------------
1. Downoad and install npm
	https://www.npmjs.com/package/download
	(or)
	https://nodejs.org/en/download/
2. Download and install VSCode (Visual Studio Code)
	https://code.visualstudio.com/
3. Download and install github cli (and github gui optional)
	
4. Install Typescript through npm as below:
	
		npm install -g typescript

5. Install Angular CLI
		
		npm install -g angular-cli

Creating Angular 2 Folder Structure
-=-=-=-=-=-=-=-==-=-=-=-=-=-=--------

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
	[ngModel] = "empId"
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
orderBy					✓	
filter					✓	
number					✓	
DecimalPipe					✓		use number as keyword
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
		
Routing
--------------------------

<base href="/">

imports for app.module.ts:
import { RouterModule, Routes } from '@angular/router';

confiugreing routes in app.module.ts:
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }

Including resultant content in app module template:
<router-outlet></router-outlet>

Example:
	 <h1>Angular Router</h1>
	  <nav>
		<a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	  </nav>
	  <router-outlet></router-outlet>


Angular 4 Features and Performance
As compared to Angular 2, there are lots of new items added to this list. Not just new features but also some tweaks that improved old capabilities. So let's move on to see the list.

Smaller and Faster:
With Angular 4, programs will consume less space and run quicker than previous versions. And the staff is focused on continually making additional improvements.

View Engine:
They have made adjustments under to hood to exactly what AOT created code looks like. These modifications decrease the size of the generated code for those parts by approximately 60 percent. The more complicated the templates are, the greater the savings.

Animation Package:
They've pulled animations from the Angular core and set them in their own package. This means that in case you don't use animations, this excess code won't end up on your creation packages.
This feature will also enable you to easily find docs and to take advantage of auto-completion. You may add animations to the main NgModule by importing the Browser Animations Module out of @angular/platform-browser/animations.

Improved *ngIf and *ngFor:
The template binding syntax currently supports a few helpful alterations. Now you can utilize an if/else design syntax, and assign local variables like if to unroll an observable.

Angular Universal:
This release now contains the results of the external and internal work from the Universal team throughout the last few months. The vast majority of this Universal code is currently located in @angular/platform-server.

To learn more about using Angular Universal, have a look at the new renderModuleFactory method in @angular/platform-server, or Rob Wormald's Demo Repository. More documentation and code samples will come.

TypeScript 2.1 and 2.2 Compatibility:
The group has upgraded Angular into a more recent version of TypeScript. This will enhance the rate of ngc and you'll receive far better type checking during your program.

Source Maps for Templates:
Now whenever there's an error caused by something in one of the templates, they create source maps that provide a meaningful context concerning the original template.	
	
	

