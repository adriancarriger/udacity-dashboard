import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ApiService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public isClosed = true;
  constructor(public apiService: ApiService) { }
  public ngOnInit(): void {
    this.apiService.checkForUpdates();
  }
}
