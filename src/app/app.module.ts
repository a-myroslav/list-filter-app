import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FlightListComponent} from './components/flight-list/flight-list.component';
import {Page404Component} from './components/page-404/page-404.component';

const routerConfig = [
    {path: '', component: FlightListComponent},
    {path: '**', component: Page404Component}
];

@NgModule({
    declarations: [
        AppComponent,
        FlightListComponent,
        Page404Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routerConfig)
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
