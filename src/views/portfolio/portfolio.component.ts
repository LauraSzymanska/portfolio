import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  

}
