# Angular (creating an angular website).


## What is Angular?

Angular is a Typescript-based open-source web application framework led by the Angular team at Google by a community of individuals and corporations.
Angular is an open source. It is a part of the Javascript ecosystem    and one of the most popular software development instruments today.

It belongs to the MEAN stack, an acronym that describes four major technologies that cover major software product development aspects
* M – MongoDB
* E – Express, backend middle
* A – Angular, front-end framework
* N – Node.js, runtime environment


## Why Should I Learn Angular?

Why shouldn’t you actually?
It’s one of the most popular software development instruments today, this a summary of the best features it has to offer;

* Angular was built with model-View-Controller architecture(two-way data-binding
* Provides structure for javascript
* Increases code readability
* Great for spa(single page applications
* Makes an application more testable
* Modular development
* Gives our application a clean structure



## Installing Angular

- npm install –g@angular/cli <br>
 Verify installation;
* ng –v <br>
To start a new project <br>
Open terminal and run the following command
*  ng new /*name of project/*


# Creating an Angular website.
Open terminal and run the following command 
- ng new --minimal --routing --style=scss my-angular-site
- ng new my-angular-site<br>
Navigate the the application project and start the server
- cd my-angular-site
- ng serve <br>
Point your brower to [http:/localhost:4200/](http:/localhost:4200/) and you should the defalt app running.

NOTE: Bulma (css framework) is being used in this webiste.<br>
Using: npm install --save bulma

## Component Overview
Components can be thought of as **small pieces of an interface that are independent of each other**. They are building blocks in an angular application, components are defined using the @component decorator.

From the official docs:

>Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.

![component image](/components.png)

The app.component.ts file consist of few parts:
- Imports: To enable our component to work, we have to import a **component** from the angular library, it provides a configuration metadata that determines how the component should be processed, initialized and used in a runtime.
- Metadata: Inside the @component we can specify our metadata for that component which contains the selector, templateUrl and StyleUrls.
- Class: This contains attributes and functions , it si where the entire logic of aa given component is stored.

### To generate a component using cli command:
ng generate component *name* <br>
ng g component *name*

To generate a header and footer component, follow the steps above. once that is generated you have something like this
![footer and haeder screenshot](/img2.png)

## Contact template (.html) file)

This template looks like regular html it also contains Angular template syntax. It is responsible for the view of our component. it uses data-binding which allows us to synchronize data binding between our application and DOM.

## Contact styles (.scss file)
It contains all styles for the component.

## Contact tests (.spec.ts file)
We create tests within this file, we use them to avoid breaking components logic.


## App.module (.module.ts file)

The first Angular component is called the root component. This root component is what gets bootstrapped when the application runs.<br>
Once you open the file you'll notice that its added to the bootstrap array of the module definition. the app.module.ts file is only required for our App component(root component) the other component wont require module.ts to work.

``` javascript
providers: [
  bootstrap: [AppComponent]
})
```
## Header
Inside the header.component.html file:
```html
<div style="text-align:center">
  <nav class="navbar navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png">
        </a>
      </div>
<!-- menu -->
  <div class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="contact">Contact</a>
      <a class="navbar-item" routerLink="users">Users</a>

    </div>
  </div>

    </nav>
  </div>
  ```

In the header.component.ts we add the following to the template
```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
```
We then import the new component within the  app.module.ts
``` javascript
import { HeaderComponent } from './components/header/header.component';
```
Now its time to use the component in the app.component.ts
``` javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
  <!--header-->
  <app-header></app-header>
  ``` 

Save the file and run it in the browser.

To generate the home page follow the same steps used to create/generate the footer and header components.
I'm making the home page a .hero . In the home.component.html we add the following code
 ``` html
 <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Home Page!</h1>

    </div>
    </div>
    </section>
```

Add it to the app.module.ts, after that use it in the app template(app.component.ts).

## Routing
To route two pages together, first of all generate another page(contact page).
While we created this project we used the --routing flag, therefore we were giving the AppRoutingModule thats where we'll add the routes.<br>
app-routing.module.ts :

``` javascript
const routes: Routes = [

{
	path: '',
	pathMatch: 'full',
    component: HomeComponent
},
{
    path: 'contact',
    component: ContactComponent
  },
  ```
The pathMatch set to 'full' tells the router to only look for first one with no extra path parts. <br>
We can now creaate links using some bulma classes , once the menu is done, we use routerLink directive to tell these links where to go.
 ``` html
<!-- menu -->
  <div class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="contact">Contact</a>
      <a class="navbar-item" routerLink="users">Users</a>

    </div>
  </div>
  ```
  Remove the components from the App's template now that it has been replaced with the links at the header.<br>
  The router is working so we can now inject the router-outlet in the apps template.<br>

The router works so the view updates with the specific component.<br>
A great single page website!