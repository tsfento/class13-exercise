import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  templateUrl: './all-other-orders.component.html',
  styleUrls: ['./all-other-orders.component.css']
})
export class AllOtherOrdersComponent implements OnChanges {
  @Input() inputForOtherOrders: number;
  allOtherOrders: string[] = [];

  ngOnChanges() {
    if (this.inputForOtherOrders >= 6) {
      this.allOtherOrders.push('Order number: ' + this.inputForOtherOrders);
    }

    if (this.inputForOtherOrders === 0) {
      this.allOtherOrders = [];
    }
  }
}
