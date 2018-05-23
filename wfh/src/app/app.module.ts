import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NonAdminComponent } from './non-admin/non-admin.component';
import { AdminComponent } from './admin/admin.component';

import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [ //"Now you can use the login tag that is referenced in the html"
    AppComponent,
    LoginComponent,
    NonAdminComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      { path: 'toNonAdmin', component: NonAdminComponent },
      { path: 'toAdmin', component: AdminComponent },
      { path: 'toLogin', component: LoginComponent },
      { path: '', redirectTo: 'toLogin', pathMatch: 'full'},
      { path: '**', redirectTo: 'toLogin', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
