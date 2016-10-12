import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public logo = {
    src: 'assets/dunder-mifflin-sabre.jpg',
    alt: 'logo for Dunder Mifflin - a division of Sabre'
  };
  public logoLoaded = true;
  private logoOptions = {
    default: {
      src: 'assets/dunder-mifflin.jpg',
      alt: 'logo for Dunder Mifflin'
    },
    sabre: {
      src: 'assets/dunder-mifflin-sabre.jpg',
      alt: 'logo for Dunder Mifflin - a division of Sabre'
    }
  };

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    //this.apiService.currentDate.subscribe( data => this.updateLogo( data['$value'] ) );
  }

  private updateLogo(stamp) {
    if (stamp >= 1261112400000 && stamp < 1336622400000) {
      this.logo = this.logoOptions.sabre;
    } else {
      this.logo = this.logoOptions.default;
    }
    this.logoLoaded = true;
  }

}
