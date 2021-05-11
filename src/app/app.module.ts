import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule} from 'ngx-mask'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContatoComponent } from './contato/contato.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacaoComponent } from './formacao/formacao.component';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ContatoComponent,
    EnderecoComponent,
    ExperienciaComponent,
    FormacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatCardModule,
    MatStepperModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatRadioModule,
    FormsModule,



    ReactiveFormsModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
