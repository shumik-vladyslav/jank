import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dekey-details',
  templateUrl: './dekey-details.component.html',
  styleUrls: ['./dekey-details.component.scss']
})
export class DekeyDetailsComponent implements OnInit {

  constructor() { }

  @Input() deKeyDetail;

  dataStatus = [
    {name: "Active", value: 1},
    {name: "Inactive", value: 2}]
    
  ngOnInit() {
    console.log("dekey Detail " + this.deKeyDetail);
  }

}
