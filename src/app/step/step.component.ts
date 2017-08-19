import { Component, Input } from '@angular/core';

import { Step } from './step';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'step-process',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.css']
})
export class StepComponent {
    @Input()
    step: Step;
}
