import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as moment from 'moment';

@Injectable()
export class ApiService {
  public branches: FirebaseListObservable<any[]>;
  public sales: FirebaseObjectObservable<any>;
  public issues: FirebaseObjectObservable<any>;
  public rawIssues: FirebaseListObservable<any>;
  public currentDate: FirebaseObjectObservable<any[]>;
  public lastUpdate: FirebaseObjectObservable<any>;
  public updateRunning: FirebaseObjectObservable<any>;
  public interval;
  constructor(af: AngularFire, private http: Http) {
    this.branches = af.database.list('client/branches');
    this.sales = af.database.object('client/sales');
    this.issues = af.database.object('client/issues');
    this.currentDate = af.database.object('client/current');
    this.rawIssues = af.database.list('client/issues_raw');
    this.lastUpdate = af.database.object('server/run_info/last_update');
    this.updateRunning = af.database.object('server/run_info/running');
  }
  public checkForUpdates(): void {
    // If not running
    this.updateRunning.subscribe( data => {
      if (data.$value === false ) {
        this.startRequests();
      } else {
        clearInterval( this.interval );
      }
    });
    // If too much time since last update (on app init only)
    this.lastUpdate.subscribe( data => {
      let secondsSinceUpdate = (moment().valueOf() - data.$value) / 1000;
      if (secondsSinceUpdate > 40) {
        this.startRequests();
      } else {
        clearInterval( this.interval );
      }
    });
  }

  /** 
   * Continue to request that the server start pushing updates
   * until the first request comes in
   */
  private startRequests(): void {
    clearInterval( this.interval );
    this.requestUpdates();
    this.interval = setInterval( () => {
      this.requestUpdates();
    }, 8000);
  }

  private requestUpdates(): void {
    let url = 'https://ae373q5sa4.execute-api.us-west-2.amazonaws.com/prod/lambda';
    this.http.get( url ).subscribe();
  }
}
