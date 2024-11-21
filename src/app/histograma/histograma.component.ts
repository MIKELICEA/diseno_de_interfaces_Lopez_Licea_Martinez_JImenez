import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-histograma',
  templateUrl: './histograma.component.html',
  styleUrls: ['./histograma.component.scss'],
})
export class HistogramaComponent implements AfterViewInit {
  datos = [40, 70, 100, 30];
  etiquetas = ['T1', 'T2', 'T3', 'T4'];

  ngAfterViewInit(): void {
    const canvas = document.getElementById('histograma') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d')!;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.etiquetas,
          datasets: [
            {
              label: 'Progreso',
              data: this.datos,
              backgroundColor: '#2080CB', // Color de las barras
              borderColor: '#014B98', // Borde de las barras
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Temas',
                color: '#000',
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Porcentaje',
                color: '#000',
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Oculta la leyenda
            },
          },
        },
      });
    } else {
      console.error('No se encontró el elemento canvas con ID "histograma".');
    }
  }
}
