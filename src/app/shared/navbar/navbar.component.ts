import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { routes } from '../../app.routes';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() tabIndex: number;
  @ViewChild('startOfContent') startOfContent;
  @Output() onNav = new EventEmitter();
  public startContentIndex: number = -1;
  public routes = routes;
  public currentPath: string;
  // Logo
  public logo = {};
  public logoLoaded = false;
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

  constructor(public apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onNav.emit();
        this.currentPath = event.url;
        document.body.scrollTop = 0;
        this.skipNavigation();
      }
    }, (error: any) => {
      this.onNav.emit();
    });
    this.apiService.currentDate.subscribe( data => this.updateLogo( data['$value'] ) );
  }

  /**
   * Set focus on `#start-of-content` and set the
   * tabindex to allow normal tab flow
   */
  public skipNavigation(): void {
    if (this.tabIndex) {
      this.startContentIndex = this.tabIndex;
    } else {
      this.startContentIndex = 0;
    }
    this.startOfContent.nativeElement.focus();
  }

  /**
   * Remove `#start-of-content` from the taborder
   * after it loses focus
   */
  public startContentBlur(): void {
    this.startContentIndex = -1;
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
