import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BannerComponent } from '../../../components/banner/banner.component';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
