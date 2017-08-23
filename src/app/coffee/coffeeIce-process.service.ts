import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';

import { Coffee, coffeeIcons, CoffeeProcess } from './coffee';

@Injectable()
export class CoffeeIceProcessService extends CoffeeProcess {

    private _initProcess: Observable<Coffee>;

    set process (initProcess: Observable<Coffee>) {
        this._initProcess = initProcess;
    }
    get process(): Observable<Coffee> {

        return this._initProcess.concatMap(
            (initdata: Coffee) => {
                initdata.steps[initdata.steps.length - 1].lastFlag = false;
                return Observable.of(initdata)
                .map((data: Coffee) => this.addStep(coffeeIcons.ice, false, data))
                .map((data: Coffee) => this.addStep(coffeeIcons.iceCoffee, true, data));
            }
        );
    }
}
