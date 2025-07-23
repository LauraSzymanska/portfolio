import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  imports: [
    RouterModule
  ],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  

}
