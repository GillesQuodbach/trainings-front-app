import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer: Customer | undefined;
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
  }

  onSaveCustomer(customer: Customer) {
    this.cartService.addCustomer(customer);
    this.router.navigateByUrl('resume');
  }
}
