import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hwm-form',
  templateUrl: './hwm-form.component.html',
  styleUrls: ['./hwm-form.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class HWMFormComponent implements OnInit {

  hwmMemberShipFormData:any={product_detail:[{}],waste_detail:[{}]};
  hwmDocuments:any=[]
  productDetails:any=[];
  categoryData:any=[];
  member_classification:any=[]
  constructor(private apiservice: ApiService, private messageService: MessageService,) { }
  ngOnInit(): void {
  }

  //to register HWM membership candidate
  Register(form:NgForm) {
    console.log(form.value)
    let formData = new FormData()

    let dob1filterDate = moment(this.hwmMemberShipFormData.date_of_birth1).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.date_of_birth1 = dob1filterDate;

    let dob2filterDate = moment(this.hwmMemberShipFormData.date_of_birth2).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.date_of_birth2 = dob2filterDate;

    let wasteDisposalDate = moment(this.hwmMemberShipFormData.hw_disposal_expected_date).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.hw_disposal_expected_date = wasteDisposalDate;

    let production_commencement_date = moment(this.hwmMemberShipFormData.production_commencement_date).format('YYYY/MM/DD');
    this.hwmMemberShipFormData.production_commencement_date = production_commencement_date;

    if(this.hwmMemberShipFormData.valid) {
      this.apiservice.hwmRegistration(form.value).subscribe((res:any)=> {
        console.log(res);
      },
      (error:HttpErrorResponse)=> {
        console.log(error);
      })
    }
  }

  //to remove one row to product detail
  removeProductDetailRow(index?:any,string?:any) {
    if(string=='product') {
      if(this.hwmMemberShipFormData.product_detail?.length>1) {
        this.hwmMemberShipFormData.product_detail.splice(index,1);
      }
    }
    else {
      if(this.hwmMemberShipFormData.waste_detail?.length>1) {
        this.hwmMemberShipFormData.waste_detail.splice(index,1);
      }
    }
  }

  //to add one row to product detail
  addProductDetailRow(index?:any,string?:any) {
    if(string=='product') {
      this.hwmMemberShipFormData.product_detail.push({});
    }
    else {
      this.hwmMemberShipFormData.waste_detail.push({});
    }
  }

  //upload files as binary
  onFileChange(event:any){
    // this.files = event.target.files;
    console.log(event,event.target.files);
  }
}
