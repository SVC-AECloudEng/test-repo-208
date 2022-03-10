//Angular Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//App Specific Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterComponent} from './sections/shared/footer/footer.component';
import {LandingComponent} from './sections/landing/landing.component';
import {LoginComponent} from './sections/shared/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

//Created Components
import { MainNavComponent } from './sections/shared/main-nav/main-nav.component';

//Angular Material Imports
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SettingsComponent } from './sections/shared/settings/settings.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { TokenInterceptor } from './shared/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    SettingsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MatProgressButtonsModule.forRoot(),
    
    //Angular Material Imports
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
