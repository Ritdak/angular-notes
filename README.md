# Angular (creating an angular website).


## What is Angular?
Angular is a **Typescript-based** open-source web application framework. Angular is maintained by the Angular team at **Google** and since it is **open-source**, it is also supported by a community of individuals and corporations.

It is a part of the **Javascript** ecosystem and it is one of the most popular frameworks today.

Angular can be used by itself to build web applications and it can also be used with other technologies to build web applications. An example of this is the **MEAN** stack.

**MEAN** is an acronym that represents four technologies/tools including Angular that can be used to build a robust full-stack web-application.

* M – **MongoDB** (A no-SQL database)
* E – **Express** (A back-end framework)
* A – **Angular** (A front-end framework)
* N – **Node.js** (Javascript runtime environment)

## Why Should I Learn Angular?
Why shouldn’t you? That is the question.

In addition to being one of the most popular software development tools today, these are a couple of the perks that Angular offers:

* It provides structure for your Javascript code.
* It increases code readability.
* It is great for building **Single Page Applications** (SPAs).
* It enables you write applications that are easy to test.
* Angular is built with the **Model-View-Controller** architecture. This enables you structure your application in a **clean and modular** way.

## Installing Angular
- First, install the Angular framework and **command line interface** (CLI) tool.

  To do this, open your terminal *(Windows Terminal, Powershell, CMD, etc)* and run this command

```powershell
npm install –g @angular/cli
```
- After installing the framework and CLI tool, verify that the installation was successful.
```powershell
  ng version
```
If the installation was successful, this command will return the version of the Angular framework and CLI tool.

- After installing the framework, create a new project.
```powershell
  ng new <project-name>
```
An example:
```powershell
  ng new my-first-angular-app --routing

  # I am using the --routing flag so that a routing module file is generated for me. I will explain this shortly.
```

# Building an Angular application.
- After creating the new project, navigate to the project directory/folder
```powershell
  cd my-first-angular-app
```
- After navigating to the project directory, you need to run the application.
  This is done by starting the development server that the Angular framework comes with.
```powershell
  ng serve
```
- After running the `ng serve` command. The development server is started and your application should be running on port **4200** which is the default port.

- Open your browser and navigate to [http:/localhost:4200](http:/localhost:4200). You should see your newly-created application running.

NOTE: For this presentation, I will be using the Bulma CSS framework for the styling of the application. Bootstrap or similar alternatives can also be used.

Since I am using Bulma, I'll go ahead and install it now.

```powershell
  npm install --save bulma
```

## Fundamental Parts of An Angular Application
### Components
Components can be thought of as **small pieces of an interface that are independent of each other**. They are the building blocks of an Angular application. Components are classes that are defined by the `@Component` decorator.

From the official Angular documentation:

>Components are the most basic building block of a UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.

![component image](/components.png)

An Angular component must always possess at least one component i.e a root component. When we create a new project, like we did, the CLI tool creates a root component for us. That root component is called the **app component** and is usually denoted using `app.component`.

Depending on the type, size and complexity of application you are building, you might need more than just the one (root) component. You can create more components from the CLI by running this command:

```powershell
  ng generate component <component-name>
  
                    OR

  ng g component <component-name>
```

Let's create some components, **Contact, Header and Footer**:

```powershell
  ng g component contact
  ng g component header
  ng g component footer
```

After running these commands, we have the header and footer components created like this:
![Header and Footer Screenshot](/img2.png)

#### Parts of A Component
An Angular component is a usually made up of at several files which are as follows.

- The template file **(`*.component.html`)**:
  This file is composed of regular html as well as Angular template syntax. It is responsible for handling the view of our component (what is rendered for the user to see and interact with).
  It uses data-binding which allows us to connect and synchronize data between our application and **Document Object Model**(DOM).

- The style file **(`*.component.[scss|css]`)**:
  This file contains the style rules that are to be applied to a component. This file can either be a **SCSS** or **CSS** file depending on your needs and preference.
  Rules declared in a component's style file are scoped to that component, that means the rules cannot affect to another component.

- The unit test file **(`*.component.spec.ts`)**:
  Remember when I said that Angular enables you write code that is easy to test? This is one way Angular does that. Every component has a test file where unit tests for that component can be written and asserted.

- The module file **(`*.component.module.ts`)**:
  By default, it is not mandatory for a component to have a module file. However, having a module file for your components enable you take advantage of **lazy-loading** and **code-splitting**.

  The module file is also essential for importing and using other components inside a component as well as importing core Angular modules into your component to utilize features that Angular has out-of-the-box **(OOTB)**.
  Examples of these features are ***Form data collection and validation**, **Date formatting**, **Currency formatting**, etc*.

#### The Root Component (`app.component.*`)
  If you remember, I said that when you create a new Angular project, a root component is created. Let's take a look at the insides of this component briefly.

- **`app.component.html`**: The app template file. It contains HTML markup as well as Angular template syntax. Since this is the root component, this is where all other components will be imported and rendered in.
  
- **`app.component.[scss|css]`**: The style file, where style rules for this component will reside.

- **`app.component.spec.ts`**: The unit test file, where unit tests for this component will reside.

- **`app.component.ts`**: The `app.component.ts` file consist of few parts:
  - Imports: To enable our component to work, we have to import the **Component** decorator from the core Angular library. This provides a configuration metadata that determines how the component should be processed, initialized and used in the runtime.
  - Metadata: Inside the **@Component** decorator we can specify our metadata for that component which contains the **selector**, **templateUrl** and **styleUrls**.
  - Class: This contains attributes and functions, it is where the entire logic of a given component is stored.

- **`app.module.ts`**: The root component is what gets bootstrapped when the application runs.
Once you open the file you'll notice that its added to the bootstrap array of the module definition.

``` javascript
providers: [
  bootstrap: [AppComponent]
})
```

The app.module.ts file is mandatory for the `app.component`(root component) to work. Like I said, the other components don't necessarily require a module file to work.

Let's work with one of the components we created earlier.

#### The Header component (`header.component.*`)

Inside the `header.component.html` file:

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
    styleUrls: ['./header.component.scss']
  })
```
We then import the header component in the `app.module.ts` file:

``` javascript
  import { HeaderComponent } from './components/header/header.component';
```
And use the component in the `app.component.ts` file:

```javascript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: `<app-header></app-header>`,
    styleUrls: ['./app.component.scss']
  });
```

### Routing
  Routing as the name suggests involves navigating between pages in your application.

 When this project was created, we used the `--routing` flag. What that did was tell Angular to generating a routing module file for us to use to declare and configure routes for the application.

 Below is an example of a route configuration:

```typescript
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
  ]
```
Here we have two routes, one to the `HomeComponent` and another to the `ContactComponent`.

* The `path` property is a required configuration. It specifies what URL path should link to what component/page.
  
  For the `HomeComponent`, the `path` is set to `''` which is empty, that means the `HomeComponent` page can be accessed via the URL `http://localhost:4200`.
  
  For the `ContactComponent`, the `path` is set to `'contact'`, which means the `ContactComponent` page can be accessed in the browser using the URL `http://localhost:4200/contact`.

  Since the `path` to the `HomeComponent` page is empty, that means it is the default/home page of the application

* The `pathMatch` property is an optional route configuration. When it is set to `'full'`, it tells the router to only look for first one with no extra path parts.

* The `component` propery is a required route configuration. It specifies what component should be linked to a particular path.


After setting up the route configuration, we can now create links. We use the `routerLink` directive, passing in declared `path` values from our route config, to navigate to the components linked to those paths.<br/>
The `routerLink` pretty much tells the browser where to go, it's like an anchor tag `<a href></a>` but for Angular routing.

 ``` html
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="contact">Contact</a>
    </div>
  </div>
```
