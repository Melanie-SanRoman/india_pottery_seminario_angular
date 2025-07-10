import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {

  constructor() {}

  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange = new EventEmitter<number>();

  get stock(): number {
    return this.max - this.quantity;
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity($event: Event) {
    const input = $event.target as HTMLInputElement;
    const value = parseInt(input.value);
    if (!isNaN(value) && value >= 0 && value <= this.max) {
      this.quantity = value;
      this.quantityChange.emit(this.quantity);
    } else {
      input.value = this.quantity.toString();
    }
  }
}
