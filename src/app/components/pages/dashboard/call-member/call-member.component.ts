import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-call-member',
  templateUrl: './call-member.component.html',
  styleUrls: ['./call-member.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class CallMemberComponent implements OnInit {
  @ViewChild('dt1') FilteredData: ElementRef
  memberList: any = [];
  visibleSidebar2;
  loading: boolean = true;
  categoryName: any = [];
  constructor(private apiservie: ApiService) { }

  ngOnInit(): void {
    this.getMemberListData();
    this.getMemberCategoryById();
    
    // this.getFilterCategories();
  }
  getFilterDataById(name: any, id: any) {
    this.apiservie.getAllFilters(name, id).subscribe((res: any) => {
      console.log(res);
    })
  }
  getMemberCategoryById() {
    this.apiservie.getMemberCategory().subscribe(
      (res: any) => {
        this.categoryName = res;
        console.log(this.categoryName);
      }
    )
  }
  // all member contact list
  getMemberListData() {
    this.apiservie.getMemberList().subscribe((res: any) => {
      this.memberList = res.data;
      console.log(res);
      this.loading = false;
    })
  }
  // clear all filter button function
  clear(table: any) {
    table.clear();
  }
  // get filterd data
  // onChange() {
  //   console.log(this.FilteredData)
  // }
}
