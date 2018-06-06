import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LookupComponent } from './lookup/lookup.component';
import { FooterComponent } from './footer-component/footer-compoent';
import { AutocompleteFilterEmployeesComponent } from './auto-complete/autocomplete.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserService } from './shared/user.service';
import { DatepickerComponent  } from './datepicker/datepicker.component';
import { QueryResultTableComponent } from './query-result-table/query-result-table.component';

import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule
} from '@angular/material';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewEntryComponent,
    LookupComponent,
    FooterComponent,
    AutocompleteFilterEmployeesComponent,
    DatepickerComponent,
    QueryResultTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    RouterModule.forRoot ([
      { path: 'new-entry', component: NewEntryComponent },
      { path: 'entry-lookup', component: LookupComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
