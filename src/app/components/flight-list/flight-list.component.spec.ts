/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {FlightListComponent} from './flight-list.component';
import {FlightService} from '../../services/flight.service';
import {HttpModule, Http, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('FlightListComponent', () => {
    let component: FlightListComponent;
    let fixture: ComponentFixture<FlightListComponent>;
    let _flightService: FlightService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlightListComponent],
            providers: [FlightService, {
                provide: Http,
                useFactory: (mockBackend, options) => {
                    return new Http(mockBackend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
            },
                MockBackend,
                BaseRequestOptions]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(inject([FlightService], (flightService: FlightService) => {
        _flightService = flightService;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

