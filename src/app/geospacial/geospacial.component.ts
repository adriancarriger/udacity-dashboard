import {
  Component,
  ViewChild,
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
  public mapMeta = {
    lat: 41.4090,
    lng: -75.6624,
    zoom: 7,
    height: undefined,
    styles: mapStyles,
    loaded: true
  };

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.mapMeta.height = (window.innerHeight - this.map.nativeElement.offsetTop) + 'px';
  }
}
