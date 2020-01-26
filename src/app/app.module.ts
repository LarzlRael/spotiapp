import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SeachComponent } from './components/seach/seach.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//modulo para hacer los peticiones http
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomSegur } from './pipes/domSeguro.pipe';
import { TarjetsComponent } from './components/tarjets/tarjets.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeachComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomSegur,
    TarjetsComponent,
    LoadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
