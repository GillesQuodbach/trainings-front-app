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
    this.listCart = this.cartService.getCart();
    this.customer = this.cartService.getCustomer();
  }

  totalOrder() {
    return this.cartService.calculateTotalOrder();
  }

  goToHome() {
    localStorage.removeItem('savedData');
    window.location.reload();
  }
}
