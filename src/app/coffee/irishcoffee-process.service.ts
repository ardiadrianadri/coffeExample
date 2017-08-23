import { Injectable } from '@angular/core';

import { Coffee, coffeeIcons, CoffeeProcess } from './coffee';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';

@Injectable()
export class IrishCoffeeProcess extends CoffeeProcess {

    private _initProcess: Observable<Coffee>;

    set process (initProcess: Observable<Coffee>) {
        this._initProcess = initProcess;
    }

    get process (): Observable<Coffee> {
        return this._initProcess.concatMap(
            (initData: Coffee) => {
                initData.steps[initData.steps.length - 1].lastFlag = false;
                return Observable.of(initData)
                .map((data: Coffee) => this.addStep(coffeeIcons.wisky, false, data))
                .map((data: Coffee) => this.addStep(coffeeIcons.irishCofee, true, data));
            }
        );
    }
}
