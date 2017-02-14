import {Component, OnInit, Inject} from '@angular/core';
import {FlightService} from '../../services/flight.service';

@Component({
    selector: 'app-flight-list',
    templateUrl: 'flight-list.component.html',
    styleUrls: ['flight-list.component.css'],
    providers: [FlightService]
})
export class FlightListComponent implements OnInit {

    public flightsData: any;

    constructor(@Inject(FlightService) private _flightService: FlightService) {
    }

    ngOnInit() {
        this._flightService.getData().subscribe(
            (data) => {
                this.flightsData = data;
            }
        );
    }

}
