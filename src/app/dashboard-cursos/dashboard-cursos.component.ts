import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-cursos',
  templateUrl: './dashboard-cursos.component.html',
  styleUrls: ['./dashboard-cursos.component.scss']
})
export class DashboardCursosComponent {
  cursos = [
    { imagen: 'assets/bases_de_datos.png', nombre: 'Base de datos', hora: '8-9', carrera: 'Ing. en Computación' },
    { imagen: 'assets/bases_de_datos.png', nombre: 'Base de datos', hora: '10-11', carrera: 'Ing. en Computación' },
    { imagen: 'assets/diseño_de_juego.png', nombre: 'Diseño de video juegos', hora: '9-10', carrera: 'Ing. en Sistemas Inteligentes' },
    { imagen: 'assets/diseño_de_juego.png', nombre: 'Diseño de video juegos', hora: '11-12', carrera: 'Ing. en Sistemas Inteligentes' },
    { imagen: 'assets/diseño_interfaces.png', nombre: 'Diseño de interfaces', hora: '19-20', carrera: 'Ing. en Computación' },
    { imagen: 'assets/diseño_interfaces.png', nombre: 'Diseño de interfaces', hora: '20-21', carrera: 'Ing. en Computación' }
  ];
}
