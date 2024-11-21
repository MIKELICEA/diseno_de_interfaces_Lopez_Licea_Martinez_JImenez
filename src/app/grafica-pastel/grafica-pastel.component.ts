import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-grafica-pastel',
  templateUrl: './grafica-pastel.component.html',
  styleUrls: ['./grafica-pastel.component.scss'],
})
export class GraficaPastelComponent implements AfterViewInit {
  datos = [40, 30, 30];
  etiquetas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  colores = ['#004A98', '#00B2E3', '#FFFFFF'];

  ngAfterViewInit(): void {
    const canvas = document.getElementById('graficaPastel') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d')!;
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.etiquetas,
          datasets: [
            {
              data: this.datos,
              backgroundColor: this.colores,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true, // Muestra la leyenda
              position: 'bottom', // Ubicación de la leyenda
            },
          },
        },
      });
    } else {
      console.error('No se encontró el elemento canvas con ID "graficaPastel".');
    }
  }
}
