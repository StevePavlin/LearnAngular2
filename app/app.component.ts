import {Component} from 'angular2/core';
import {TweetsComponent} from "./tweets.component";
import {SummaryPipe} from "./summary.pipe";
import {BootstrapPanel} from "./bootstrap.panel.component";

@Component({
    selector: 'my-app',
    template: `
        <bs-panel>
            <div class="heading">Heading!</div>
            <div class="body">This is the body!</div>
        </bs-panel>`,
    directives: [
        BootstrapPanel,
    ],
})
export class AppComponent {

}