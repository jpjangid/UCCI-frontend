import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { FacilityBookingService } from 'src/app/services/facility-booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  @Output() mode: any = new EventEmitter<any>();
  @Input() selectedData: any;
  facilityBookingForm = this.fb.group({
    booking_type: ['', Validators.required],
    booking_date: ['', Validators.required],
    booked_by: ['', Validators.required],
    place: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private FacilityBookingService: FacilityBookingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    
  }

  onBackPress(){
    this.mode.emit({mode: 'selection'});
  }

  onFacilityDetailsSubmit() {
    this.facilityBookingForm.value.place = this.selectedData.place.fee_name;
    this.facilityBookingForm.value.booking_date = this.selectedData.date;
    if (this.facilityBookingForm.value.booking_type == 'external') {
      this.FacilityBookingService.insertFacilityData(
        this.facilityBookingForm.value
      ).subscribe((data) => {
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Success',
        //   detail: 'Member category added successfully',
        // });
        this.mode.emit({mode: 'external booking', selectedPlaceData: data});
        console.log("response : ", data);
        
      }),
      (error : HttpErrorResponse)=> {
        console.log("error : ", error);
      }

      
    }
  }
}
