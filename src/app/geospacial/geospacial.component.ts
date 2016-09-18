import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapStyles } from './map-styles';

@Component({
  selector: 'app-geospacial',
  templateUrl: 'geospacial.component.html',
  styleUrls: ['geospacial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeospacialComponent {
  @ViewChild('branchContainer') branchContainer;
  public isCollapsed: boolean = true;

  public zoom: number = 6;
  public lat: number = 41.4090;
  public lng: number = -75.6624;
  public styles = MapStyles;


  constructor() { }

  onIdle() {
    this.branchContainer.nativeElement.parentElement.parentElement.parentElement.previousSibling.classList.add("map-label");
  }

}
