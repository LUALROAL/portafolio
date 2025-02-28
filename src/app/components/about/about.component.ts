import { Component, OnInit } from '@angular/core';
import { CardCodeComponent } from '../../shared/components/card-code/card-code.component';

@Component({
  selector: 'app-about',
  imports: [CardCodeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {


    ngOnInit(): void {

    }


}
