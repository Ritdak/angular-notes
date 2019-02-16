import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing home component to route
import { HomeComponent } from './components/home/home.component';
//adding the contact route
import { ContactComponent } from './components/contact/contact.component';


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
  {
    path: 'users',
    loadChildren: '../app/users/users.module#UsersModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
