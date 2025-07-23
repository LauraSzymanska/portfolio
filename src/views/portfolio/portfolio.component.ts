import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

    
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private location: Location) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
      ])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }
  
  goBack(): void {
    this.location.back();
  }


}
