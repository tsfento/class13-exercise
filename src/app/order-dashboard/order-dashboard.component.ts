import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  @Output() orderEvent = new EventEmitter<number>();
  order: number = 0;
  isWorking: boolean = false;
  interval;

  onBeginWorkday() {
    if(this.isWorking) return;

    this.isWorking = true;

    this.interval = setInterval(() => {
      this.order++;
      this.orderEvent.emit(this.order);
    }, 2000);
  }

  onEndWorkday() {
    if(!this.isWorking) return;

    this.isWorking = false;
    clearInterval(this.interval);
    this.order = 0;
  }
}
