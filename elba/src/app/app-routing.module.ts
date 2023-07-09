import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StarterComponent } from './admin/starter/starter.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { FamilleComponent } from './main/composant/famille/famille.component';
import { Famille2Component } from './main/composant/famille2/famille2.component';
import { ChangementTourComponent } from './main/composant/changement-tour/changement-tour.component';

const routes: Routes = [
  {path:'', redirectTo:'famille', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent, title: "Administration", children: [
      //{path:'', redirectTo:'starter', pathMatch: 'full'},
      { path: 'starter', component: StarterComponent, title: "Gestion des starters" }
    ]
  },
  {
    path: '', component: MainComponent, children: [
      { path: 'famille', component: FamilleComponent, title: "titre test" },
      { path: 'tour-suivant', component: ChangementTourComponent, title: "Terminer le tour" }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
