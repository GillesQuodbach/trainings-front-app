import { Router } from '@angular/router';
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

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.retrieveData();
    this.listCart = this.cartService.getCart();
  }

  onRemoveFromCart(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
  }

  goToForm() {
    if (this.listCart?.length === 0) {
      alert('votre panier est vide');
    } else {
      this.router.navigateByUrl('customer');
    }
  }

  calculateTotal(): number {
    return this.cartService.calculateTotalOrder();
  }
}
