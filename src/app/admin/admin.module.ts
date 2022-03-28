import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { SharedModule } from '../shared/shared.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { RegisteredDetailsComponent } from './registered-details/registered-details.component';
import { UserRegisComponent } from './user-regis/user-regis.component';
import { AnuualReportComponent } from './anuual-report/anuual-report.component';
import { ProfileComponent } from './profile/profile.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    ManageCategoriesComponent,
    CreateCategoriesComponent,
    ManageProductsComponent,
    CreateProductsComponent,
    RegisteredDetailsComponent,
    UserRegisComponent,
    AnuualReportComponent,
    ProfileComponent,
    MonthlyReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
