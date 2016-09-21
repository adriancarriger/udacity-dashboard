import { Component, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MapStyles } from './map-styles';

import { ApiService } from '../shared/index';

@Component({
  selector: 'app-geospacial',
  templateUrl: 'geospacial.component.html',
  styleUrls: ['geospacial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeospacialComponent {
  @ViewChild('map') map;
  @ViewChildren('branches') branches;
  public isCollapsed: boolean = true;
  public mapMeta = {
    lat: 41.4090,
    lng: -75.6624,
    zoom: 6,
    height: undefined,
    styles: MapStyles,
    loaded: false
  }

  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.mapMeta.height = (window.innerHeight - this.map.nativeElement.offsetTop) + 'px';
  }

  ngAfterViewInit() {
    this.branches.changes.subscribe(children => {
      this.updateLabels();
    });
  }

  public updateLabels(): void {
    setTimeout( () => this.addClassToLabels(), 0);
  }

  public scheduleUpdate(): void {
    setTimeout( () => {
      this.addClassToLabels();
    }, 500);
  }

  private addClassToLabels(): void {
    let scheduleUpdate = false;
    this.branches.forEach(branch => {
      let el = branch.content.parentElement.parentElement.previousSibling;
      if (el !== undefined && el.classList !== undefined) {
        el.classList.add("map-label");
      }
      if (el === undefined || el.classList === undefined || !el.classList.contains("map-label")) {
        scheduleUpdate = true;
      }
    });
   if (scheduleUpdate) {
     this.scheduleUpdate();
   }
  }

}
