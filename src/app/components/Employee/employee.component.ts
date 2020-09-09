import {Component, OnInit} from '@angular/core';
import {Product} from '../../Model/Product';

@Component({
selector:'app-emp',
templateUrl:'./employee.component.html'
})

export class EmployeeComponent implements OnInit
{
    //Simple array declaration
    Subjects:string[]=["Angular","Java","DotNet"];
    ShowFaculty:boolean=true;
    FacultyName:string="Rashmi";

    employees: any[] = [
        {
            code: 'emp101', name: 'Rashmi', gender: 'Female',
            annualSalary: 5500, dateOfBirth: '05/16/1988'
          },
          {
            code: 'emp101', name: 'Nisha', gender: 'Female',
            annualSalary: 5500, dateOfBirth: '05/16/1988'
          },
          {
            code: 'emp101', name: 'Abhay', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '05/16/1988'
          }
      ];

      id:number=10;
  name:string="IPhone";
  cost:number=100000;
  category:string="Electronics";
          // Object
  pro:Product={id:11,name:"Note8",cost:43434,category:'Electronics'};

  // Array
  products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];
  
      myFunction()
      {
          alert("You clicked me!");
      }
      deleteProduct(id:number)
      {
          alert("Product to be deleted "+id);
      }
      editProduct(id:number,name:string)
      {
          alert(`Product to be edited ${id} and ${name}`);
      }
    constructor() { }
    
    ngOnInit():void
    {

    }
}
