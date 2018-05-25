import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NonAdminComponent } from './non-admin/non-admin.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer-component/footer-compoent';
import { AutocompleteFilterExample } from './auto-complete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
  declarations: [ //"Now you can use the login tag that is referenced in the html"
    AppComponent,
    LoginComponent,
    NonAdminComponent,
    AdminComponent,
    FooterComponent,
    AutocompleteFilterExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
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
