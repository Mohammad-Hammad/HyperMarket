import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    ManageCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
