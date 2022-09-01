import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  productDetails:any=[];
  categoryData:any=[];
  member_classification:any=[]
  constructor(private apiservice: ApiService, private messageService: MessageService,) { }
  ngOnInit(): void {
  }

  //to register HWM membership candidate
  Register(form:NgForm) {
    console.log(form.value)
    // if(form.valid) {
      this.apiservice.hwmRegistration(form.value).subscribe((res:any)=> {
        console.log(res);
      },
      (error:HttpErrorResponse)=> {
        console.log(error);
      })
    // }
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
}
