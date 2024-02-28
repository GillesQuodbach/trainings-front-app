import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cartItem';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  listCart: CartItem[] | undefined;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCart = this.cartService.listCart;
  }

  onRemoveFromCart(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    console.log(cartItem);
  }

  calculateTotal(): number {
    let total = 0;
    for (let cartItem of this.cartService.listCart) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  }
}