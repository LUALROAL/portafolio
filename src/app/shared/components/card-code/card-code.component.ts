import { Component } from '@angular/core';

@Component({
  selector: 'app-card-code',
  imports: [],
  templateUrl: './card-code.component.html',
  styleUrl: './card-code.component.scss'
})

export class CardCodeComponent {
  curlyRight : string = '}';
  curlyLeft : string = '{';
  comma : string = ',';
  correo: string = 'alejorodryguez@gmail.com';
}
