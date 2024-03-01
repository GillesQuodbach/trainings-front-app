import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cartItem';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  listCart: CartItem[] | undefined;
  customer: Customer | undefined;
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.retrieveData();
    this.listCart = this.cartService.listCart;
    this.customer = this.cartService.customer;
    // console.log('listCart', this.listCart);
    console.log('customer', this.customer);
  }

  calculateTotal(): number {
    let total = 0;
    for (let cartItem of this.cartService.listCart) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  }
}
