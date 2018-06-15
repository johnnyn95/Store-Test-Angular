import {Component} from 'angular2/core';
import {Config} from './config.service'
@Component({
    selector:'navbar',
    templateUrl:'app/ts/navbar.component.html'
})

export class NavbarComponent{
    siteName = Config.SITE_NAME;
    navHome = Config.NAV_HOME;
    navStore = Config.NAV_STORE;
    navPricing = Config.NAV_PRICING;
    navAbout = Config.NAV_ABOUT;
}
