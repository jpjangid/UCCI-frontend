import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss'],
  providers:[MessageService]
})
export class DashboardNavbarComponent implements OnInit {

  constructor(private apiservice: ApiService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }
  // logout function
  logout() {
    console.log(localStorage.getItem('access_token'))
    this.apiservice.logoutUser().subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('access_token')
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: res.message
      });
      setTimeout(() => {
        this.router.navigateByUrl('');
      }, 1000);
    })
  }
}
