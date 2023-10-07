import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-first-five-orders',
  templateUrl: './first-five-orders.component.html',
  styleUrls: ['./first-five-orders.component.css']
})
export class FirstFiveOrdersComponent implements OnChanges {
  @Input() inputForFiveOrders: number;
  firstFiveOrders: string[] = [];

  ngOnChanges() {
    if (this.inputForFiveOrders !== 0 && this.inputForFiveOrders <= 5) {
      this.firstFiveOrders.push('Order number: ' + this.inputForFiveOrders);
    }

    if (this.inputForFiveOrders === 0) {
      this.firstFiveOrders = [];
    }
  }
}
