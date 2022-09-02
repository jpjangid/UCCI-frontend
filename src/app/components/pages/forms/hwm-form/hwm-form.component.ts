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

  hwmMemberShipFormData:any={product_details:[{}],waste_details:[{}]};
  hwmDocuments:any=[]
  productDetails:any=[];
  categoryData:any=[];
  member_classification:any=[]
  selectedFile:File

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

    // if(this.hwmMemberShipFormData.valid) {
      console.log(this.hwmMemberShipFormData);
      let data = this.hwmMemberShipFormData
      console.log(data)
      formData.append('company_name',data.company_name);
      formData.append('gst_number',data.gst_number);
      formData.append('gst_type',data.gst_type);
      formData.append('cin_number',data.cin_number);
      formData.append('uin_number',data.uin_number);
      formData.append('avgemp',data.avgemp);
      formData.append('office_telephone',data.office_telephone);
      formData.append('residential_telephone',data.residential_telephone);
      formData.append('address',data.address);
      formData.append('state',data.state);
      formData.append('city',data.city);
      formData.append('pin_code',data.pin_code);
      formData.append('factory_address',data.factory_address);
      formData.append('factory_city',data.factory_city);
      formData.append('factory_state',data.factory_state);
      formData.append('factory_pin_code',data.factory_pin_code);
      formData.append('registration_number',data.registration_number);
      formData.append('capital_investment',data.capital_investment);
      formData.append('website',data.website);
      formData.append('email',data.email);
      formData.append('nature_of_business',data.nature_of_business);
      formData.append('about',data.about);
      formData.append('logo',this.selectedFile);
      formData.append('member_classification_id',data.member_classification_id);
      formData.append('member_category_id',data.member_category_id);
      formData.append('name1',data.name1);
      formData.append('designation1',data.designation1);
      formData.append('date_of_birth1',data.date_of_birth1);
      formData.append('email1',data.email1);
      formData.append('office_phone1',data.office_phone1);
      formData.append('mobile_no1',data.mobile_no1);
      formData.append('nominee1_address',data.nominee1_address);
      formData.append('nominee1_city',data.nominee1_city);
      formData.append('nominee1_state',data.nominee1_state);
      formData.append('nominee1_pin_code',data.nominee1_pin_code);
      formData.append('department1',data.department1);
      formData.append('preferred_communication1',data.preferred_communication1);
      formData.append('biodata1',data.biodata1);
      formData.append('profile1',this.selectedFile, this.selectedFile?.name);
      formData.append('name2',data.name2);
      formData.append('designation2',data.designation2);
      formData.append('date_of_birth2',data.date_of_birth2);
      formData.append('email2',data.email2);
      formData.append('office_phone2',data.office_phone2);
      formData.append('mobile_no2',data.mobile_no2);
      formData.append('nominee2_address',data.nominee2_address);
      formData.append('nominee2_city',data.nominee2_city);
      formData.append('nominee2_state',data.nominee2_state);
      formData.append('nominee2_pin_code',data.nominee2_pin_code);
      formData.append('department2',data.department2);
      formData.append('preferred_communication2',data.preferred_communication2);
      formData.append('profile2',this.selectedFile, this.selectedFile?.name);
      formData.append('biodata2',data.biodata2);
      formData.append('product_details',data.product_details);
      formData.append('waste_details',data.waste_details);
      formData.append('investment',data.investment);
      formData.append('hw_disposal_expected_date',data.hw_disposal_expected_date);
      formData.append('production_commencement_date',data.production_commencement_date);
      formData.append('incineration_facility_required',data.incineration_facility_required);
      formData.append('is_production_started',data.is_production_started);
      formData.append('gst_certificate',this.selectedFile, this.selectedFile?.name);
      formData.append('turnover',data.turnover);
      formData.append('ca_certificate',this.selectedFile, this.selectedFile?.name);
      formData.append('is_ec_applied',data.is_ec_applied);
      formData.append('is_cte_applied',data.is_cte_applied);
      formData.append('is_cto_applied',data.is_cto_applied);
      formData.append('is_hwm_auth_applied',data.is_hwm_auth_applied);
      formData.append('is_ec_obtained',data.is_ec_obtained);
      formData.append('is_cte_obtained',data.is_cte_obtained);
      formData.append('is_cto_obtained',data.is_cto_obtained);
      formData.append('is_hwm_auth_obtained',data.is_hwm_auth_obtained);
      formData.append('ec_hold_reason',data.ec_hold_reason);
      formData.append('cte_hold_reason',data.cte_hold_reason);
      formData.append('cto_hold_reason',data.cto_hold_reason);
      formData.append('hwm_hold_reason',data.hwm_hold_reason);
      formData.append('ec_document',this.selectedFile, this.selectedFile?.name);
      formData.append('cte_document',this.selectedFile, this.selectedFile?.name);
      formData.append('cto_document',this.selectedFile, this.selectedFile?.name);
      formData.append('hwm_document',this.selectedFile, this.selectedFile?.name);
      formData.append('remarks',data.remarks);
      formData.append('undertaking',this.selectedFile, this.selectedFile?.name);
      formData.append('application',this.selectedFile, this.selectedFile?.name);
      formData.append('utr_detail1',data.utr_detail1);
      formData.append('feesdocument1',this.selectedFile, this.selectedFile?.name);
      formData.append('utr_detail2',data.utr_detail2);
      formData.append('feesdocument2',this.selectedFile, this.selectedFile?.name);
      this.apiservice.hwmRegistration(formData).subscribe((res:any)=> {
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
      if(this.hwmMemberShipFormData.product_details?.length>1) {
        this.hwmMemberShipFormData.product_details.splice(index,1);
      }
    }
    else {
      if(this.hwmMemberShipFormData.waste_details?.length>1) {
        this.hwmMemberShipFormData.waste_details.splice(index,1);
      }
    }
  }

  //to add one row to product detail
  addProductDetailRow(index?:any,string?:any) {
    if(string=='product') {
      this.hwmMemberShipFormData.product_details.push({});
    }
    else {
      this.hwmMemberShipFormData.waste_details.push({});
    }
  }

  //upload files as binary
  processImage(event) {
    console.log(event);
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }
}
