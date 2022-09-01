import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-call-member',
  templateUrl: './call-member.component.html',
  styleUrls: ['./call-member.component.scss']
})
export class CallMemberComponent implements OnInit {
  array: any = [{name: 'name 1'}];
  memberList: any = [];
  constructor(private apiservie: ApiService) { }

  ngOnInit(): void {
    this.getMemberListData();
  }
  getMemberListData() {
    this.apiservie.getMemberList().subscribe((res:any) => {
      this.memberList = res.data;
      console.log(res);
    })
  }
}
