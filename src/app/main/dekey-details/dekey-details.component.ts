import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter} from '@angular/core';
import { VerifyService } from '../../services/verify.service';

@Component({
  selector: 'app-dekey-details',
  templateUrl: './dekey-details.component.html',
  styleUrls: ['./dekey-details.component.scss']
})
export class DekeyDetailsComponent implements OnInit, AfterViewInit {

  constructor(private VerifyServise: VerifyService) { }

  @Input() deKeyDetail;
  @Output() saveEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  dataStatus = [
    {name: "Created", value: 0},
    {name: "Active", value: 1},
    {name: "Expired", value: 2}
  ]

  labelPosition;

  SwitchRadioType(){
    console.log(this.deKeyDetail.masterKeyProvider);
    switch(this.deKeyDetail.masterKeyProvider){
      case "LOCAL":
        this.labelPosition = "1";
        break;
      case "PKCS11":
        this.labelPosition = "2";
        break;
      case "AWS":
        this.labelPosition = "3";
        break;
      default:
        this.labelPosition = "1";
    }
  }

  ClickSaveDeKeyDetail(){
    if(typeof(this.deKeyDetail.expirationTime) != "string"){
      this.deKeyDetail.expirationTime = this.deKeyDetail.expirationTime.format("YYYY-MM-DD");
    }
    this.VerifyServise.PutDEKeyDetails(this.deKeyDetail).subscribe((data:any) => {
      console.log("Click");
      this.saveEvent.emit(null);
      console.log(this.deKeyDetail);
      console.log(data.json());
    });

    this.clickCancel();
  }

  clickCancel(){
    this.cancelEvent.emit(null);
    this.deKeyDetail = null;
  }

  ClickDelete(){
    this.VerifyServise.DeleteDEKey(this.deKeyDetail).subscribe((data:any) => {
      console.log("Click Delete");
      console.log(data);
      this.clickCancel();
    });
  }

  ngOnInit() {
    this.SwitchRadioType();
  }

  ngAfterViewInit(){
    document.getElementById("requestDetailKeys").scrollIntoView();
  }

}
