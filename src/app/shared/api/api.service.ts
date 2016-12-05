import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as moment from 'moment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  public branches: FirebaseListObservable<any[]>;
  public sales: FirebaseObjectObservable<any>;
  public issues: FirebaseObjectObservable<any>;
  public rawIssues: FirebaseListObservable<any>;
  public currentDate: FirebaseObjectObservable<any[]>;
  public lastUpdate: FirebaseObjectObservable<any>;
  public updateRunning: FirebaseObjectObservable<any>;
  public routeInfo: FirebaseObjectObservable<any>;
  constructor(af: AngularFire, private http: Http) {
    this.branches = af.database.list('client/branches');
    this.sales = af.database.object('client/sales');
    this.issues = af.database.object('client/issues');
    this.currentDate = af.database.object('client/current');
    this.rawIssues = af.database.list('client/issues_raw');
    this.lastUpdate = af.database.object('server/run_info/last_update');
    this.updateRunning = af.database.object('server/run_info/running');
    this.routeInfo = af.database.object('client/tabs');
  }
  /**
   * **How this api works:**
   * 
   * 1. An AWS lambda will issue updates about every 5-10 seconds for up to 2-8 minutes to a
   * Firebase database.
   * 2. Firebase will then push updates to each client (usually through a websocket connection).
   * 3. Upon the lambda update cycle completion, the api running status will change to false.
   *   a. If no clients are listening, the lambda will do nothing further to conserve resources.
   *   b. If any client is listening, it will detect the api running status change and send a get
   * request to another lambda via {@link requestUpdates} and the server will start another cycle
   * of updates.
   */
  checkForUpdates() {
    this.updateRunning.subscribe(status => this.onApiStatusChange(status.$value));
    this.lastUpdate.subscribe(lastUpdate => this.onLastUpdate(lastUpdate.$value));
  }
  /**
   * Triggered on each api running status change.
   * 
   * Will request further updates if the value is false.
   */
  private onApiStatusChange(status: boolean) {
    if (!status) { this.requestUpdates(); }
  }
  /**
   * If it has been more than 10 seconds since the last update, then request further updates.
   */
  private onLastUpdate(lastUpdate) {
    let secondsSinceUpdate = (moment().valueOf() - lastUpdate) / 1000;
    if (secondsSinceUpdate > 10) { this.requestUpdates(); }
  }
  /**
   * Requests that the AWS lambda start pushing updates.
   */
  private requestUpdates() {
    let apiUrl = 'https://ae373q5sa4.execute-api.us-west-2.amazonaws.com/prod/lambda';
    this.http.get(apiUrl).subscribe();
  }
}
