import { Step } from '../step/step';
import { Observable } from 'rxjs/Observable';

export const coffeeIcons = {
    water: '/assets/water.png',
    coffeeBean: '/assets/coffee_been.png',
    coffee: '/assets/coffee.png',
    iceCoffee: '/assets/ice_coffee.png',
    ice: '/assets/ice.png',
    milk: '/assets/milk.ico',
    wisky: '/assets/whisky.png',
    irishCofee: '/assets/irish_coffee.png',
    capuccino: '/assets/capuccino.png'
};

export interface Coffee {
    steps: Step[];
}

export abstract class CoffeeProcess {

    public process: Observable<Coffee>;

    protected addStep (icon: string, flag: boolean, coffee: Coffee): Coffee {
        const step: Step = {
            icon: icon,
            lastFlag: flag
        };

        coffee.steps.push(step);

        return coffee;
    }
}
