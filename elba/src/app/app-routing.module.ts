import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  //{path:'', redirectTo:'franchise', pathMatch: 'full'},
  { path: 'admin',  component: AdminComponent , children: [
    //composants
  ]},
  { path: '',  component: MainComponent , children: [
    //composants
  ]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
