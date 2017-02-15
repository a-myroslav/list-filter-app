import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FlightListComponent} from './components/flight-list/flight-list.component';
import {Page404Component} from './components/page-404/page-404.component';
import {FilterAllPipe} from './helpers/filter.pipe';

const routerConfig = [
    {path: '', component: FlightListComponent},
    {path: '**', component: Page404Component}
];

@NgModule({
    declarations: [
        AppComponent,
        FlightListComponent,
        Page404Component,
        FilterAllPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routerConfig),
        MaterialModule.forRoot()
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
