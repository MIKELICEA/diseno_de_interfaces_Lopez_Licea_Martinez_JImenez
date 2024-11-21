import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardCursosComponent } from './dashboard-cursos/dashboard-cursos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CardCursoComponent } from './card-curso/card-curso.component';
import { DashboardAlumnosComponent } from './dashboard-alumnos/dashboard-alumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { BotonListaComponent } from './boton-lista/boton-lista.component';
import { NumeroComponent } from './numero/numero.component';
import { HistogramaComponent } from './histograma/histograma.component';
import { GraficaPastelComponent } from './grafica-pastel/grafica-pastel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardCursosComponent,
    SearchBarComponent,
    CustomButtonComponent,
    CardCursoComponent,
    DashboardAlumnosComponent,
    ListaAlumnosComponent,
    BotonListaComponent,
    NumeroComponent,
    HistogramaComponent,
    GraficaPastelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
