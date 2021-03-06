import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { TokenInterceptor } from './Interceptor/token.interceptor';
<<<<<<< HEAD
import { ProductComponent } from './product/product.component';
=======
>>>>>>> 4e39e57678ae90860ab046999d89d7c04cdb2f35

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TestimonialComponent,
<<<<<<< HEAD
    ProductComponent,
=======
>>>>>>> 4e39e57678ae90860ab046999d89d7c04cdb2f35
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,}),
      HttpClientModule
  ],
  providers: [
   { 
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptor,
     multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
