import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  constructor() { }

  data = [
    {name: 'Unassigned', value: 1},
    {name: 'Assigned', value: 1},
    {name: 'Complete', value: 1},
  ]

  ngOnInit() {
  }

}
