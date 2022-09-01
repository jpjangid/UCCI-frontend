import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-regular-member-list',
  templateUrl: './regular-member-list.component.html',
  styleUrls: ['./regular-member-list.component.scss']
})
export class RegularMemberListComponent implements OnInit {
  regularMemberList: any = [];
  constructor(private apiservice: ApiService) { }
  
  ngOnInit(): void {
    this.getRegularMemberListFunction()
  }
  // get regular member list api call 
  getRegularMemberListFunction() {
    this.apiservice.getregularMemberList().subscribe((res:any) => {
      console.log(res);
      // this.regularMemberList = res.data;
      res.data?.map((response:any)=> {
        response?.map((data:any)=> {
          this.regularMemberList.push(data);
        })
      })
    })
  }
  // verify member by id function
  approveMemberById(id?:any) {
    this.apiservice.verifycertificate(id).subscribe((res:any) => {
      console.log(res);
    })
  }
}
