import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ApiService {
  public branches: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.branches = af.database.list('client/branches');
  }
}
