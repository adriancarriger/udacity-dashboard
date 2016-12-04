import {
  Component,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import { mapStyles } from './map-styles';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-geospacial',
  templateUrl: 'geospacial.component.html',
  styleUrls: ['geospacial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeospacialComponent implements OnInit {
  @ViewChild('map') map;
  @ViewChildren('branches') branches;
  public isCollapsed: boolean = true;
  public subscription;
  public mapMeta = {
    lat: 41.4090,
    lng: -75.6624,
    zoom: 7,
    height: undefined,
    styles: mapStyles,
    loaded: false
  };
  public isOpen = false;

  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.mapMeta.height = (window.innerHeight - this.map.nativeElement.offsetTop) + 'px';
  }
}
