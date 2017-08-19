import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdGridListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { CoffeeProcessService } from './coffee/coffee-process.service';
import { CoffeeIceProcessService } from './coffee/coffeeIce-process.service';
import { CapuccinoProcess } from './coffee/capuccino-process.service';
import { IrishCoffeeProcess } from './coffee/irishcoffee-process.service';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdButtonModule
  ],
  providers: [
    CoffeeProcessService,
    CoffeeIceProcessService,
    CapuccinoProcess,
    IrishCoffeeProcess
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
