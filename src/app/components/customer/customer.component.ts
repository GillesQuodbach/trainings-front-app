import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.retrieveData();
  }

  onSaveCustomer(customer: Customer) {
    console.log(customer);
  }
}
