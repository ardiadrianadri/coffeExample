import { Injectable } from '@angular/core';

import { Coffee, coffeeIcons, CoffeeProcess } from './coffee';
import { Step } from '../step/step';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CoffeeProcessService extends CoffeeProcess {

    get process(): Observable<Coffee> {
        const coffee: Coffee = {
            steps: []
        };

        return Observable
        .of(coffee)
        .map((data: Coffee) => this.addStep(coffeeIcons.water, false, data))
        .map((data: Coffee) => this.addStep(coffeeIcons.coffeeBean, false, data))
        .map((data: Coffee) => this.addStep(coffeeIcons.coffee, true, data));
    }
}
