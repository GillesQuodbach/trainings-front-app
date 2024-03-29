import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    NotFoundComponent,
    CustomerComponent,
    ResumeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
