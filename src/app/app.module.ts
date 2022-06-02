import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { SinopseComponent } from './componentes/sinopse/sinopse.component';
import { CriticasComponent } from './componentes/criticas/criticas.component';
import { HomeComponent } from './componentes/home/home.component';
import { CastComponent } from './componentes/cast/cast.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    SinopseComponent,
    CriticasComponent,
    HomeComponent,
    CastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
