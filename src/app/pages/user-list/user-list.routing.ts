import { Routes } from "@angular/router";
import { AddApointmentComponent } from "./user-list.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

export const usersRouts: Routes = [
  {
    path: '',
    component: AddApointmentComponent
  },
  {
    path: 'edit',
    component: EditUserComponent
  }
];