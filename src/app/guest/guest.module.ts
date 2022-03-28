import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { UserComponent } from './user/user.component';
import { ContentComponent } from './content/content.component';
import { SearchBarCodeComponent } from './search-bar-code/search-bar-code.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    ContentComponent,
    SearchBarCodeComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
