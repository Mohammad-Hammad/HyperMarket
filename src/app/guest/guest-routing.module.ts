import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SearchBarCodeComponent } from './search-bar-code/search-bar-code.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {
    path:'',
    component:ContentComponent
  },
   {
    path:'content',
    component:ContentComponent

  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'barcode',
    component:SearchBarCodeComponent
  },
    
  {
    path:'viewUpdate',
    component:UpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
