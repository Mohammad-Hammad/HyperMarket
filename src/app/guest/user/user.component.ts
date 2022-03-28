import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private router:Router , public user:UserService) { }


  ngOnInit(): void {
  }

  

  goToSearchBarCode(){
    this.router.navigate(['guest/barcode']);
      }


    
  clear(){
        localStorage.clear();
        this.router.navigate(['guest/user']);
      }

  goToUpdateProfile()
  {
    this.router.navigate(['guest/viewUpdate']);
  }

}



// data:any=[{}]
// display_Image:any;
// selectedCustomer:any={};
// constructor(private spinner:NgxSpinnerService,private http:HttpClient,
// private toaster:ToastrService,public route:Router,public authServ:AuthService) {

//  }

//  uploadAttachment(file:FormData)
//  {

//    this.http.post('https://localhost:44338/api/user/UploadImg/',file)
//    .subscribe((res:any)=>{
//      if(res)
//      console.log(res);
//      this.display_Image=res.imageName;
//    },err=>{
//      this.toaster.error(err.message , err.status);
//    })
  
//  }
 
//  getCustomerById(id:number){
//   //show spinner 
//   this.spinner.show();
//   //hits api 
//   this.http.get('https://localhost:44338/api/user/viewCustomer/'+id).subscribe((res)=>{
//     this.selectedCustomer= res;
    
//     this.spinner.hide();
//     this.toaster.success('Data Retieved from view profile !!')
//   }, err=>{
//     //hide spinner 
//     this.spinner.hide(); 
//      //Toastr
//      this.toaster.error('something error ');

//   })
//    }


// updateCustomer(custId:any){
//   custId.imageName=this.display_Image;
//   console.log('custId '+custId);
  
//   this.http.put('https://localhost:44338/api/User/updateCustomer',custId).subscribe((res)=>{
//     console.log('inside update : '+JSON.stringify(res) );
    
//     this.toaster.success('Updated Successfully :) ')
//   },err=>{
//     this.toaster.error('something error ');
//   })
//   window.location.reload();


// }

// sreach(code:any){
//   console.log("inside servise "+code);
  
//   this.http.get('https://localhost:44338/api/User/searchBarCode/'+code)
//   .subscribe((res)=>{
//     console.log(res);
//     this.data=[res];
//     console.log("data inside search "+this.data);
    
//     this.toaster.success('Search Successfully :) ')
//   },err=>{
//     this.toaster.error('something error in Search');
//   })

// }


// }