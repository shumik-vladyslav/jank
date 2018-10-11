import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { VerifyService } from '../../services/verify.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit, AfterViewInit {

  constructor(private verifyService: VerifyService) { }

  @Input() requestDetail;
  @Output() cancelEvent = new EventEmitter();
  @Output() saveEvent = new EventEmitter();


  clickCancel(){
    this.cancelEvent.emit(null);
    this.requestDetail = null;
  }

  clickSave(){
    this.putObject.id = this.requestDetail.id;
    this.putObject.status = this.requestDetail.status;
    console.log(this.putObject);
    this.verifyService.putData(this.putObject).subscribe((data: any) => {
      this.saveEvent.emit(null);
      this.putObject.newComment = '';    
      console.log(data);
    });
    
  }


  putObject = {
    id: '',
    status: "",
    newComment: ''
  }

  data = [
    {name: 'Deleted', value: 1},
    {name: 'Unassigned', value: 2},
    {name: 'In Progress', value: 3},
    {name: 'Pending Customer Input', value: 4},
    {name: 'Pending Business Input', value: 5},
    {name: 'Pending Legal Input', value: 6},
    {name: 'Complete', value: 7}
  ]

  ngOnInit() {
  }

  ngAfterViewInit(){
    document.getElementById("requestDetail").scrollIntoView();
  }

}
