import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ApiService {
  public branches: FirebaseListObservable<any[]>;
  public sales: FirebaseObjectObservable<any>;
  public currentDate: FirebaseObjectObservable<any[]>;
  constructor(af: AngularFire) {
    this.branches = af.database.list('client/branches');
    this.sales = af.database.object('client/sales');
    this.currentDate = af.database.object('client/current');
  }
}
