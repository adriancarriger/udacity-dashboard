import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public branches = [
    {
      name: 'Scranton',
      state: 'PA',
      lat: 41.4090,
      lng: -75.6624
    }
  ];
}
