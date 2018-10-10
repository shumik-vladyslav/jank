import { Component, OnInit, Input, Output } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dekey-details',
  templateUrl: './dekey-details.component.html',
  styleUrls: ['./dekey-details.component.scss']
})
export class DekeyDetailsComponent implements OnInit {

  constructor(private VerifyServise: VerifyService) { }

  @Input() deKeyDetail;
  @Output() saveEvent = new EventEmitter();

  dataStatus = [
    {name: "Active", value: 1},
    {name: "Inactive", value: 2}
  ]

  ClickSaveDeKeyDetail(){
    this.VerifyServise.PutDEKeyDetails(this.deKeyDetail).subscribe((data:any) => {
      console.log("Click");
      this.saveEvent.emit(null);
      console.log(this.deKeyDetail);
      console.log(data.json());
    });
  }

  showPKCS11(){
    console.log('cerf')
  }

  ngOnInit() {
    
  }

}
