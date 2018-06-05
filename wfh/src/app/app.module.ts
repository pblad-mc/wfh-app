import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LookupComponent } from './lookup/lookup.component';
import { FooterComponent } from './footer-component/footer-compoent';
import { AutocompleteFilterEmployees } from './auto-complete/autocomplete.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InMemoryEntryService } from './backend';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserService } from './shared/user.service';
import { DatepickerComponent  } from './datepicker/datepicker.component';
import { QueryResultTableComponent } from './query-result-table/query-result-table.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';
import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    NewEntryComponent,
    LookupComponent,
    FooterComponent,
    AutocompleteFilterEmployees,
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
    InMemoryWebApiModule.forRoot(InMemoryEntryService),
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    RouterModule.forRoot ([
      { path: 'toNonAdmin', component: NewEntryComponent },
      { path: 'toAdmin', component: LookupComponent },
      { path: 'toLogin', component: LoginComponent },
      { path: '', redirectTo: 'toLogin', pathMatch: 'full'},
      { path: '**', redirectTo: 'toLogin', pathMatch: 'full'}
    ])
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
