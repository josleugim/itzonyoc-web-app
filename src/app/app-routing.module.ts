import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PersonComponent} from "./person/person.component";
import { CreateComponent } from "./person/create.component";
import {PersonDetailsComponent} from "./person/person-details.component";
import {EditPersonComponent} from "./person/edit-person.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'person', component: PersonComponent
  },
  {
    path: 'create-person', component: CreateComponent
  },
  {
    path: 'person-details/:id', component: PersonDetailsComponent
  },
  {
    path: 'edit-person/:id', component: EditPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
