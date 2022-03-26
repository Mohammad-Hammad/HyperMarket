import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutherizationGuardGuard } from './autherization-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'',
  component:HomeComponent
},{
path:'contact',
component:ContactComponent
},{
  path:'about',
  component:AboutComponent
  },{
    path:'test',
    component:TestimonialComponent
    },{
      path:'auth',
      loadChildren:()=>AuthModule,
      },{
        path:'admin',
        loadChildren:()=>AdminModule,
        canActivate:[AutherizationGuardGuard]
        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
