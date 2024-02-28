import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cartItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.listTrainings = this.cartService.listTrainings;
  }

  onAddToCart(training: Training) {
    const articleInCart = this.cartService.listCart.find(
      (item) => item.id == training.id
    );
    const existingId = this.cartService.listCart.findIndex(
      (item) => item.id == articleInCart?.id
    );
    console.log('article in cart', articleInCart);

    console.log('index article in cart', existingId);
    if (existingId !== -1) {
      this.cartService.listCart[existingId].quantity++;
      console.log(this.cartService.listCart[existingId]);
      this.cartService.storeData();
    } else {
      this.cartService.addTraining(training);
      this.cartService.storeData();
    }
    this.router.navigateByUrl('cart');
  }
}
