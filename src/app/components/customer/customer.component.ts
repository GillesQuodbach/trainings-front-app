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
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.retrieveData();
  }

  onSaveCustomer(customer: Customer) {
    this.cartService.storeData();
    console.log(customer);
  }

  goToResume() {
    this.router.navigateByUrl('resume');
  }
}
