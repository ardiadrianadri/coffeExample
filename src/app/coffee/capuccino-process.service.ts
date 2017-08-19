import { Injectable } from '@angular/core';

import { Coffee, coffeeIcons, CoffeeProcess } from './coffee';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CapuccinoProcess extends CoffeeProcess {

    private _initProcess: Observable<Coffee>;

    set process (initProcess: Observable<Coffee>) {
        this._initProcess = initProcess;
    }

    get process () {

        return this._initProcess.switchMap(
            (initData: Coffee) => {
                initData.steps[initData.steps.length - 1].lastFlag = false;
                return Observable.of(initData)
                .map((data: Coffee) => this.addStep(coffeeIcons.milk, false, data))
                .map((data: Coffee) => this.addStep(coffeeIcons.capuccino, true, data));
            }
        );
    }
}
