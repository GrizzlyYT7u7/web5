import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpezarComponent } from './empezar/empezar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './crear/crear.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EleccionComponent } from './eleccion/eleccion.component';

const routes: Routes = [
  { path: '', redirectTo: 'eleccion', pathMatch: 'full' },
  { path: 'eleccion', component: EleccionComponent },
  { path: 'empezar', component: EmpezarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
