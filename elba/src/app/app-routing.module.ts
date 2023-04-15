import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StarterComponent } from './admin/starter/starter.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  //{path:'', redirectTo:'franchise', pathMatch: 'full'},
  { path: 'admin',  component: AdminComponent , children: [
    { path: 'starter',  component: StarterComponent, data:{
      titre: "Gestion des starters"
    } }
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
