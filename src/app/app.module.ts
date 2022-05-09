import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { CreateComponent } from './person/create.component';
import {MatInputModule} from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {DateFormats} from "./utils/dateFormats";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PersonDetailsComponent } from './person/person-details.component';
import { EditPersonComponent } from './person/edit-person.component';
import { SearchNamePipe } from './pipes/search-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    CreateComponent,
    PersonDetailsComponent,
    EditPersonComponent,
    SearchNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MomentDateModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DateFormats }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
