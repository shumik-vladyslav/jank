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

  CheckRadioType(){
    switch(this.labelPosition){
      case '1':
        this.deKeyDetail.masterKeyProvider = "LOCAL";
        break;
      case '2':
        this.deKeyDetail.masterKeyProvider = "PKCS11";
        break;
      case '3':
        this.deKeyDetail.masterKeyProvider = "AWS";
        break;
      default:
        this.deKeyDetail.masterKeyProvider = "LOCAL";
    }
  }

  CheckMasterKeyProvider() {
    if (this.labelPosition == "2") {
      this.deKeyDetail.masterKeyConnectionString = this.deKeyDetail.pkcs11ConfigPath + "||" + this.deKeyDetail.pkcs11UserPin + "||" +
        this.deKeyDetail.pkcs11InstanceLabel + "||" + this.deKeyDetail.pkcs11CryptVector;
    } else {
      if (this.labelPosition == "3") {
        this.deKeyDetail.masterKeyConnectionString = this.deKeyDetail.awsKeyArn + "||" + this.deKeyDetail.awsAccessKeyId + "||" +
          this.deKeyDetail.awsSecretAccessKey;
      }
      else {
        this.deKeyDetail.masterKeyConnectionString = "sample";
      }
    }
  }

  ClickSaveDeKeyDetail(){
    this.CheckRadioType();
    this.CheckMasterKeyProvider();
    console.log(this.deKeyDetail);
    if(typeof(this.deKeyDetail.expirationTime) != "string" && this.deKeyDetail.expirationTime != null){
      this.deKeyDetail.expirationTime = this.deKeyDetail.expirationTime.format("YYYY-MM-DD");
    }
    this.VerifyServise.PutDEKeyDetails(this.deKeyDetail).subscribe((data:any) => {
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
