import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './main/composant/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { StarterComponent } from './admin/starter/starter.component';
import { TitreComponent } from './commun/titre/titre.component';
import { FamilleComponent } from './main/composant/famille/famille.component';
import { Famille2Component } from './main/composant/famille2/famille2.component';
import { MatButtonModule } from '@angular/material/button';
import { DetailComponent } from './admin/starter/detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ErrorComponent,
    DashboardComponent,
    AdminComponent,
    StarterComponent,
    TitreComponent,
    FamilleComponent,
    Famille2Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
