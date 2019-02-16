import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importing components for users routing
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';

const routes: Routes = [
//adding users routing
{
    path: '',
    component: UserListComponent
  },
  {
    path: ':username',
    component: UserSingleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
