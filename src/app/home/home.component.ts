import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
<<<<<<< HEAD
import { HomeService } from '../service/home.service';
=======
>>>>>>> 4e39e57678ae90860ab046999d89d7c04cdb2f35

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private toaster:ToastrService , private spinner:NgxSpinnerService, public home:HomeService) { }

  ngOnInit(): void {
    this.spinner.show();
     this.home.getCategoryAndProduct();
     this.toaster.success('Data Retrieved !!')
     setTimeout(() => {
=======
  constructor(private toaster:ToastrService , private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.toaster.success('Data Retrieved !!')
    setTimeout(() => {
>>>>>>> 4e39e57678ae90860ab046999d89d7c04cdb2f35
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
