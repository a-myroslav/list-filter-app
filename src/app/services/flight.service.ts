import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs/Rx';

import {Service} from '../helpers/service';
import {environment} from '../../environments/environment';

@Injectable()
export class FlightService extends Service {

    private _data: BehaviorSubject<any> = new BehaviorSubject({});
    public data: Observable<any> = this._data.asObservable();

    constructor(private _http: Http) {
        super();
        this.loadData();
    }

    private loadData(): void {
        this._http
            .get(environment.dataUrl)
            .map(this.prepareData)
            .catch(this.handleError)
            .subscribe(
                (data) => {
                    this._data.next(data);
                }
            );
    }

    public getData(): Observable<any> {
        return this.data;
    };

}
