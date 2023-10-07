import { Component } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  orders: string[] = [];
  isWorking: boolean = false;
  interval;

  onBeginWorkday() {
    if(this.isWorking) return;

    this.isWorking = true;

    let orderNumber: number = 1;

    this.interval = setInterval(() => {
      let order: string = 'Order number: ' + orderNumber.toString();

      orderNumber++;
      this.orders.push(order);
      console.log(this.orders);
    }, 2000);
  }

  onEndWorkday() {
    if(!this.isWorking) return;

    this.isWorking = false;
    clearInterval(this.interval);
  }
}
