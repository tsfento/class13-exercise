import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lottery-winning-order',
  templateUrl: './lottery-winning-order.component.html',
  styleUrls: ['./lottery-winning-order.component.css']
})
export class LotteryWinningOrderComponent {
  @Input() inputForLottery: number;
}
