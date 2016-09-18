import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapStyles } from './map-styles';

@Component({
  selector: 'app-geospacial',
  templateUrl: 'geospacial.component.html',
  styleUrls: ['geospacial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeospacialComponent {
  @ViewChild('map') map;
  @ViewChild('branchContainer') branchContainer;
  public isCollapsed: boolean = true;
  public mapMeta = {
    current: {
      lat: 41.4090,
      lng: -75.6624
    },
    zoom: 6,
    height: '500px',
    styles: MapStyles,
    loaded: false
  }
  public testingBranch = { // Scranton
    lat: 41.4090,
    lng: -75.6624
  }


  constructor() { }

  ngOnInit() {
    this.mapMeta.height = (window.innerHeight - this.map.nativeElement.offsetTop) + 'px';
  }

  onIdle() {
    this.branchContainer.nativeElement.parentElement.parentElement.parentElement.previousSibling.classList.add("map-label");
  }

}
