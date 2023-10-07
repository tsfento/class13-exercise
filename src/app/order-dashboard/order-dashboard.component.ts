import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  @Output() orderEvent = new EventEmitter<number>();
  order: number;
  randomNumber: number = 0;
  isWorking: boolean = false;
  interval;

  onBeginWorkday() {
    if(this.isWorking) return;

    this.isWorking = true;
    this.order = 0;

    this.interval = setInterval(() => {
      this.order++;
      this.orderEvent.emit(this.order);
      this.randomNumber = Math.floor(Math.random() * 20 + 1);
    }, 2000);
  }

  onEndWorkday() {
    if(!this.isWorking) return;

    this.isWorking = false;
    clearInterval(this.interval);
  }

  lotteryWinner(winningOrder: number) {
    this.onEndWorkday();
    alert(`You won our company's lottery. Your order number was ${winningOrder}.`);
  }
}
