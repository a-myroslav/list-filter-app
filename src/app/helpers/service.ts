import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class Service {

    public prepareData(res: Response): any {
        return res.json() || {};
    }

    public handleError(error: Response | any): any {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
