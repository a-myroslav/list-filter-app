/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {FlightService} from './flight.service';
import {HttpModule, Http, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('Flight Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FlightService, {
                provide: Http,
                useFactory: (mockBackend, options) => {
                    return new Http(mockBackend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
            },
                MockBackend,
                BaseRequestOptions]
        });
    });

    it('should work as expected', inject([FlightService], (service: FlightService) => {
        expect(service).toBeTruthy();
        expect(service.data).toBeDefined();
    }));
});
