import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ConfirmationService,MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-non-member-exporter-form',
  templateUrl: './non-member-exporter-form.component.html',
  styleUrls: ['./non-member-exporter-form.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class NonMemberExporterFormComponent implements OnInit {

  constructor(private apiservice : ApiService, private messageService: MessageService) { }
  nonMemberFormData:any={}
  turnoverData: any = {};
  nationality: any = {};
  paymentModes: any = {};
  gstTypes: any = {};
  exportTypes: any = {};
  partyTypes: any = {};
  selectedFile:File
  ngOnInit(): void {
    
    this.nationality = this.apiservice.getNationalityDropdownValue();

    this.paymentModes = this.apiservice.getpaymentModesDropdownValue();
    
    this.gstTypes = this.apiservice.getGstTypesDropdownValue();
    
    this.exportTypes = this.apiservice.getExportTypesDropdownValue();
    
    this.partyTypes = this.apiservice.getPartyTypesDropdownValue();
    
    this.apiservice.getTurnoverData().subscribe((res: any) => {
      this.turnoverData = res;
      console.log(this.turnoverData, res);
    });
    console.log(this.nationality)
    
  }
  //register function for non member exporter 
  Register(form?:any) {
    let formData = new FormData();

    let dob1filterDate = moment(
      this.nonMemberFormData.date_of_birth1
    ).format('YYYY/MM/DD');
    
    this.nonMemberFormData.date_of_birth1 = dob1filterDate;
    
    let pay_method_date = moment(
      this.nonMemberFormData.pay_method_date
    ).format('YYYY/MM/DD');
    
    this.nonMemberFormData.pay_method_date = pay_method_date;

    // if(form.valid) {
      let data = this.nonMemberFormData

      formData.append('company_name', data.company_name);
      formData.append('gst_number', data.gst_number);
      formData.append('gst_type', data.gst_type);
      formData.append('turnover', data.turnover);
      formData.append('export_type', data.export_type);
      formData.append('nationality', data.nationality);
      formData.append('party_type', data.party_type);
      formData.append('office_telephone', data.office_telephone);
      formData.append('address', data.address);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('pin_code', data.pin_code);
      formData.append('name1', data.name1);
      formData.append('designation1', data.designation1);
      formData.append('date_of_birth1', data.date_of_birth1);
      formData.append('email1', data.email1);
      formData.append('office_phone1', data.office_phone1);
      formData.append('mobile_no1', data.mobile_no1);
      formData.append('nominee1_address', data.nominee1_address);
      formData.append('nominee1_city', data.nominee1_city);
      formData.append('nominee1_state', data.nominee1_state);
      formData.append('nominee1_pin_code', data.nominee1_pin_code);
      formData.append('department1', data.department1);
      formData.append(
        'preferred_communication1',
        data.preferred_communication1
      );
      formData.append('biodata1', data.biodata1);
      formData.append('profile1', this.selectedFile);
      formData.append('mode_of_payment', data.mode_of_payment);
      if(data.mode_of_payment=='Cheque' || data.mode_of_payment == 'DD') {
        formData.append('pay_method_number', data.pay_method_number);
        formData.append('pay_method_date', data.pay_method_date);
      }
      console.log(formData,!(data.mode_of_payment=='Cheque' || data.mode_of_payment == 'DD'))
      this.apiservice.registrationForNonMember(formData).subscribe((res:any)=> {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message
        },);
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'danger',
          summary: 'Error',
          detail: error?.error
        });
      })
    // }
  }
  //upload photo 
  fileUpload(event:any) {
    this.selectedFile = event.target.files[0];
  }
}
