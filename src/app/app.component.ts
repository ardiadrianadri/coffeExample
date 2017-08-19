import { Component } from '@angular/core';

import { Step } from './step/step';
import { CoffeeProcessService } from './coffee/coffee-process.service';
import { CoffeeIceProcessService } from './coffee/coffeeIce-process.service';
import { CapuccinoProcess } from './coffee/capuccino-process.service';
import { IrishCoffeeProcess } from './coffee/irishcoffee-process.service';

import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coffeeSteps: Step[];

  constructor (
    private _coffeeProcess: CoffeeProcessService,
    private _coffeeIceProcess: CoffeeIceProcessService,
    private _capuccinoProcess: CapuccinoProcess,
    private _irishCoffeeProcess: IrishCoffeeProcess
  ) {}

  prepareCoffee() {
    this.coffeeSteps = [];
    this._coffeeProcess.process.subscribe(
      process => {
        this.coffeeSteps = process.steps.slice(0);
      }
    );
  }

  prepareCoffeeIce () {
    this.coffeeSteps = [];

    this._coffeeIceProcess.process = this._coffeeProcess.process;
    this._coffeeIceProcess.process.subscribe(
      process => {
        this.coffeeSteps = process.steps.slice(0);
      }
    );
  }

  prepareCapuccino () {
    this.coffeeSteps = [];

    this._capuccinoProcess.process = this._coffeeProcess.process;
    this._capuccinoProcess.process.subscribe(
      process => {
        this.coffeeSteps = process.steps.slice(0);
      }
    );
  }

  prepareIrishCoffee () {
    this.coffeeSteps = [];

    this._irishCoffeeProcess.process = this._coffeeProcess.process;
    this._irishCoffeeProcess.process.subscribe(
      process => {
        this.coffeeSteps = process.steps.slice(0);
      }
    );
  }
}
