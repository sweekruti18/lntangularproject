import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {EmployeeComponent} from './components/Employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
//import {ReactiveFormsModule} from './components/reactive-form/reactive-form.component';
//import {HttpClientModule,HttpHeaders,HttpClient} from '@angular/common/http';
import {HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
//import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    GenderPipe,
    AboutComponent,
    EmployeeListComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    BindingDemoComponent,
    NgclassdemoComponent,
    EditUserComponent
    //AddUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
