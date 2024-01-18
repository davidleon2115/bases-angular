import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 10

  inCreaseBy( value:number):void {
    this.counter += value;
  }

  reset():void {
    this.counter = 10
  }
}
