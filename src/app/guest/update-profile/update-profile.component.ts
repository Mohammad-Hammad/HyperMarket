import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
 
  
  customerObj=JSON.parse(localStorage.getItem('user')||'');
  customerid=parseInt(this.customerObj.nameid);
 

  unique_name=this.customerObj.unique_name;
  
  customer:any={}

  updatForm:FormGroup=new FormGroup({
    cusID:new FormControl(),
    imageName:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    // Organization:new FormControl(),
    // Location:new FormControl()
  })
  constructor(public authServ:AuthService,public user:UserService) { }
 
  ngOnInit(): void {
    console.log(typeof(this.customerid));
    
    this.user.getCustomerById( this.customerid)
  }

  uploadFile(file:any){
    if(file.length===0){
      return ;

    }
    let fileUpload=<File>file[0];
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.user.uploadAttachment(fromData);
    
  }
  
  updateProfile()
  {
    this.updatForm.controls['cusID'].setValue(this.customerid);   
    this.user.updateCustomer(this.updatForm.value);
    console.log(this.updatForm.value);
    
  }
   

}
