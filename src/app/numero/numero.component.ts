// numero.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent {
  @Input() numero: number = 0;
}
