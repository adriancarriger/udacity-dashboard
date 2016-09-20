import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  public branches = [
    {
      city: 'Scranton',
      state: 'PA',
      employees: 24,
      lat: 41.4090,
      lng: -75.6624
    }
  ];
}
