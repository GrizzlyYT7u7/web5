import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CrearComponent } from './crear/crear.component';
import { EmpezarComponent } from './empezar/empezar.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    EleccionComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    CrearComponent,
    EmpezarComponent,
    PerfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
