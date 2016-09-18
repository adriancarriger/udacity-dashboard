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

  public ngAfterViewInit(): void {
    this.branches.changes.subscribe(children => {
      setTimeout( () => this.updateLabels(), 0);
    });
  }

  public updateLabels(): void {
    this.branches.forEach(branch => {
      branch.content.parentElement.parentElement.previousSibling.classList.add("map-label");
    });
  }

}
