import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
}
