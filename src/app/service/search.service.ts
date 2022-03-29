import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
data:any=[]
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }


  sreach(datefrom:any,dateto:any){
    
    this.http.get('https://localhost:44338/api/Admin/SerachDates/',datefrom,)
    .subscribe((res:any)=>{
      console.log(res);
      this.data=[res];
      console.log("data inside search "+this.data);
      this.toastr.success('Search Successfully :) ')
    },err=>{
      this.toastr.error('something error in Search');
    })

  }

}
