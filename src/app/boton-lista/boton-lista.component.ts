import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-lista',
  templateUrl: './boton-lista.component.html',
  styleUrls: ['./boton-lista.component.scss']
})
export class BotonListaComponent {

  @Input() title: string = 'Título';
  dropdownOpen: boolean = false; // Controla la visibilidad del dropdown
  
  alumnos = [ // Array de alumnos con nombre y calificación
    { nombre: 'Adrián Álvarez', calificacion: 85 },
    { nombre: 'Carolina Bustamante', calificacion: 95 },
    { nombre: 'Benjamín Castillo', calificacion: 88 },
    { nombre: 'Daniela Díaz', calificacion: 92 },
    { nombre: 'Enrique Escobar', calificacion: 90 },
    { nombre: 'Fernando Fernández', calificacion: 87 }
  ];

  // Método para toggle el estado del dropdown
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
