import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-non-member-exporter-form',
  templateUrl: './non-member-exporter-form.component.html',
  styleUrls: ['./non-member-exporter-form.component.scss']
})
export class NonMemberExporterFormComponent implements OnInit {

  constructor(private apiservice : ApiService) { }
  nonMemberFormData:any={}
  turnoverData: any = {};
  nationality: any = {};
  ngOnInit(): void {
    this.apiservice.getTurnoverData().subscribe((res: any) => {
      this.turnoverData = res;
      console.log(this.turnoverData, res);
    });
    this.nationality = this.apiservice.getNationalityDropdownValue();
    console.log(this.nationality);
  }
  //register function for non member exporter 
  Register(form?:any) {
    console.log(form)
  }
  //upload photo 
  fileUpload(event:any) {

  }
}
