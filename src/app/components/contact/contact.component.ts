import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  //template:'`<h1>This is Contact</h1>`',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
fname:string='Sweekruti'
lname:string='Sahoo'
age:number=21
gender:string='Female'

  constructor() { }

  ngOnInit(): void {
  }

}
