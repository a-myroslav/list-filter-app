import {Component, OnInit, Inject} from '@angular/core';
import {FlightService} from '../../services/flight.service';

@Component({
    selector: 'app-flight-list',
    templateUrl: 'flight-list.component.html',
    styleUrls: ['flight-list.component.scss'],
    providers: [FlightService]
})
export class FlightListComponent implements OnInit {

    public flightsData: any = [];
    public currentCarrier: string;
    public carrierList: any = [];
    private emptyOption: any;

    constructor(@Inject(FlightService) private _flightService: FlightService) {
        this.emptyOption = {value: '', viewValue: 'ALL'};
        this.currentCarrier = this.emptyOption.value;
    }

    ngOnInit() {
        this._flightService.getData().subscribe(
            (data) => {
                if (typeof data.flights !== 'undefined') {
                    this.flightsData = data.flights;
                    this.carrierList = this.prepareCarrierList(data.flights);
                    this.currentCarrier = this.emptyOption.value;
                }
            }
        );
    }

    prepareCarrierList(flights: any) {
        let list = [], preparedList = [];

        if (!flights.length) {
            return list;
        }

        flights.map((item) => {
            if (list.indexOf(item.carrier) === -1) {
                list.push(item.carrier);
                preparedList.push({value: item.carrier, viewValue: item.carrier});
            }
        });

        preparedList.push(this.emptyOption);

        return preparedList;
    }

}
