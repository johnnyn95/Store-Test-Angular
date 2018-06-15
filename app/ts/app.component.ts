import {Component} from 'angular2/core';
import {Config} from './config.service'
import {Video} from './video';
import {PlayListComponent} from './playlist.component';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlayListComponent,NavbarComponent]
})


export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1,"Video 1","#1","video number 1"),
            new Video(2,"Video 2","#2","video number 2")
        ]
    }
}
