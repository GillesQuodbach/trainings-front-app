import { CartItem } from 'src/app/model/cartItem';
import { Training } from 'src/app/model/training';
import { Customer } from 'src/app/model/customer';
import { Injectable } from '@angular/core';
import { listTrainings } from 'src/assets/data/listTrainings';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listTrainings: Training[] = [];
  listCart: CartItem[] = [];

  constructor() {
    this.retrieveData;
    this.listTrainings = listTrainings;
  }
  customer: Customer = {
    name: '',
    firstName: '',
    address: '',
    email: '',
    phone: '',
  };

  checkOutData = { cart: this.listCart, customer: this.customer };
  storeData() {
    const savedData = {
      cart: this.listCart,
      customer: this.customer,
    };
    localStorage.setItem('savedData', JSON.stringify(savedData));
  }
  // Ajout formation
  addTraining(training: Training) {
    const articleInCart = this.listCart.find((item) => item.id == training.id);
    const existingId = this.listCart.findIndex(
      (item) => item.id == articleInCart?.id
    );
    if (existingId !== -1) {
      this.listCart[existingId].quantity += training.quantity;
      console.log(this.listCart[existingId]);
      this.storeData();
    } else {
      this.listCart.push(training);
      this.storeData();
    }
  }

  addCustomer(customer: Customer) {
    this.customer = this.getCustomer();
    this.storeData();
  }

  // retrieve training
  getTraining() {
    return this.listTrainings;
  }

  // retrieve customer
  getCustomer() {
    return this.customer;
  }

  // retrieve cart
  getCart() {
    return this.listCart;
  }

  // remove from training from cart
  removeCartItem(cartItem: CartItem) {
    const indexCartItemToRemove = this.listCart.findIndex(
      (item) => item.id == +cartItem.id
    );
    console.log(indexCartItemToRemove);

    this.listCart.splice(indexCartItemToRemove, 1);
    this.storeData();
  }

  // recupère les données du localStorage
  retrieveData() {
    const savedDataString = localStorage.getItem('savedData');
    if (savedDataString) {
      const savedData = JSON.parse(savedDataString);
      this.listCart = savedData.cart;
      this.customer = savedData.customer;
    }
    console.log('savedData', savedDataString);
  }

  calculateTotalOrder(): number {
    let total = 0;
    for (let cartItem of this.listCart) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  }
}
