import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeComponent } from './components/Employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
//import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'emp',component:EmployeeComponent},
  {path:'list',component:EmployeeListComponent},
  {path:'form',component:ReactiveFormComponent},
  {path:'user',component:UserComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'binding',component:BindingDemoComponent},
  {path:'ngclass',component:NgclassdemoComponent},
  {path:'edituser',component:EditUserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
