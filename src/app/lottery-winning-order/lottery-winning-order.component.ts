import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-lottery-winning-order',
  templateUrl: './lottery-winning-order.component.html',
  styleUrls: ['./lottery-winning-order.component.css']
})
export class LotteryWinningOrderComponent implements OnChanges {
  @Input() inputForLottery: number;
  @Input() lotteryNumber: number;
  @Output('lotteryWinner') lotteryWinner = new EventEmitter<void>();

  ngOnChanges() {
    if (this.inputForLottery !== 0 && this.lotteryNumber === 20) {
      this.lotteryWinner.emit();
    }
  }
}