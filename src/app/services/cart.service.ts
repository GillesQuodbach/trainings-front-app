import { CartItem } from 'src/app/model/cartItem';
import { Training } from 'src/app/model/training';
import { Customer } from 'src/app/model/customer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    this.retrieveData;
  }

  listTrainings = [
    {
      id: 1,
      name: 'Java',
      description: 'Formation Java SE 8 sur 5 jours',
      price: 1500,
      quantity: 1,
    },
    {
      id: 2,
      name: 'DotNet',
      description: 'Formation DotNet 3 jours',
      price: 1000,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Python',
      description: 'Formation Python/Django sur 5 jours',
      price: 1500,
      quantity: 1,
    },
  ];

  listCart: CartItem[] = [];

  customer: Customer = {
    name: '',
    firstName: '',
    address: '',
    email: '',
    phone: '',
  };

  checkOutData = { cart: this.listCart, customer: this.customer };

  addTraining(training: Training) {
    this.listCart.push(training);
    this.storeData();
  }

  removeCartItem(cartItem: CartItem) {
    const indexCartItemToRemove = this.listCart.findIndex(
      (item) => item.id == +cartItem.id
    );
    console.log(indexCartItemToRemove);

    this.listCart.splice(indexCartItemToRemove, 1);
    this.storeData();
  }

  storeData() {
    const savedData = {
      cart: this.listCart,
      customer: this.customer,
    };
    localStorage.setItem('savedData', JSON.stringify(savedData));
  }

  retrieveData() {
    const savedDataString = localStorage.getItem('savedData');
    if (savedDataString) {
      const savedData = JSON.parse(savedDataString);
      this.listCart = savedData.cart;
      this.customer = savedData.customer;
    }
  }
}
