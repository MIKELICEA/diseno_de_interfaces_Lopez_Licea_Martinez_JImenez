import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardCursosComponent } from './dashboard-cursos/dashboard-cursos.component'; 
import { DashboardAlumnosComponent } from './dashboard-alumnos/dashboard-alumnos.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-cursos', component: DashboardCursosComponent },
  { path: 'dashboard-alumnos', component: DashboardAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
