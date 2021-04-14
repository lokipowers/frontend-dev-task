import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import {UserSingleComponent} from './components/user-single/user-single.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListingComponent,
  },
  {
    path: 'users/:id',
    component: UserSingleComponent
  },
  {
    path: 'users/new',
    component: UserSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
