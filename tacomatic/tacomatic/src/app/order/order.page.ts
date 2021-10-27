import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  private currentNumber = 1;
  constructor() {}

  ngOnInit() {}

  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    if (this.currentNumber > 1) {
      this.currentNumber--;
    }
  }
}
