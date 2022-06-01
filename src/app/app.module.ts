import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { SinopseComponent } from './componentes/sinopse/sinopse.component';
import { CriticasComponent } from './componentes/criticas/criticas.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    SinopseComponent,
    CriticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
