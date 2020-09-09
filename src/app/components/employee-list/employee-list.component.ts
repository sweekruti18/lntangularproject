import { Component, OnInit } from '@angular/core';

import {EventService} from 'src/app/services/Event.service';
import {Event} from 'src/app/Model/Event';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  events:Event[]=[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    
    this.events=this.eventService.getEvents();
    
  }
   funcDelete(e:Event){
    this.eventService.funcDelete(e);
   }
   addEvent(eventName:string,desc:string,speaker:string)
   {
     this.eventService.addEvent(eventName,desc,speaker)
   }
    
}
