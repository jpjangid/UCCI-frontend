import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-external-booking',
  templateUrl: './external-booking.component.html',
  styleUrls: ['./external-booking.component.scss'],
})
export class ExternalBookingComponent implements OnInit {
  @Input() selectedPlaceData: any;
  @Output() mode = new EventEmitter<any>();
  amount: number;
  confirmData: any;
  constructor() {}

  ngOnInit(): void {
    this.confirmData = this.selectedPlaceData.Data;
    console.log('confirm data: ', this.confirmData);

    console.log('inner Data : ', this.selectedPlaceData);
    // alert('please select membership')
    if (
     ( this.selectedPlaceData.member_fee != null &&
      this.selectedPlaceData.non_member_fee != null)
    ) {
      var isMember = 'nonMember';
      if (isMember == 'member') {
        this.amount = this.selectedPlaceData.member_fee[0].member_amount;
      } else if (isMember == 'nonMember') {
        this.amount =
          this.selectedPlaceData.non_member_fee[0].non_member_amount;
      }
    } else if (this.selectedPlaceData.member_fee != null) {
      this.amount = this.selectedPlaceData.member_fee[0].member_amount;
    } else if (this.selectedPlaceData.non_member_fee) {
      this.amount = this.selectedPlaceData.non_member_fee[0].non_member_amount;
    }
    // if (
    //   this.selectedPlaceData.member_fee &&
    //   this.selectedPlaceData.non_member_fee
    // ) {
    //   var isMember = 'nonMember';
    //   if (isMember == 'member') {
    //     this.amount = this.selectedPlaceData.member_fee[0].member_amount;
    //     // alert("member fee :- "+ this.amount);
    //   } else if (isMember == 'nonMember') {
    //     this.amount =
    //       this.selectedPlaceData.non_member_fee[0].non_member_amount;
    //     // alert("member fee :- "+ this.amount);
    //   }
    // } else if (this.selectedPlaceData.member_fee != null) {
    //   this.amount = this.selectedPlaceData.member_fee[0].member_amount;
    //   // alert(this.amount);
    //   // alert("member fee :- "+ this.amount);
    // } else if (this.selectedPlaceData.non_member_fee != null) {
    //   this.amount = this.selectedPlaceData.non_member_fee[0].non_member_amount;
    //   // alert("member fee :- "+ this.amount);
    // }
  }
  onBackPress() {
    this.mode.emit('booking form');
  }
}
