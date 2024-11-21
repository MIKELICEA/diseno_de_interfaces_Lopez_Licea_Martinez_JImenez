import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos = [
    { id: '1', nombre: 'Adrián Álvarez', selected: false },
    { id: '2', nombre: 'Carolina Bustamante', selected: false },
    { id: '3', nombre: 'Benjamín Castillo', selected: false },
    { id: '4', nombre: 'Daniela Díaz', selected: false },
    { id: '5', nombre: 'Enrique Escobar', selected: false },
    { id: '6', nombre: 'Fernando Fernández', selected: false }
  ];
}
