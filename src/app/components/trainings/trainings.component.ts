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
    this.cartService.addTraining(training);
    this.router.navigateByUrl('cart');
  }
}
