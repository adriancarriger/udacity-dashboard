import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { routes } from '../../app.routes';

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
  constructor(private router: Router) {}

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

}
