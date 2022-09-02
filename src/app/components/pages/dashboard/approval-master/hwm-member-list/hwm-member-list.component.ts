import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hwm-member-list',
  templateUrl: './hwm-member-list.component.html',
  styleUrls: ['./hwm-member-list.component.scss']
})
export class HwmMemberListComponent implements OnInit {
  hwmMemberList:any=[]
  loading:boolean=false
  constructor(private __apiservice : ApiService) { }

  ngOnInit(): void {
    this.loading=true;
    this.__apiservice.getHwmMemberList().subscribe((res:any)=> {
      console.log(res)
      this.hwmMemberList=res.data;
      this.loading=false;
    })
  }

}
