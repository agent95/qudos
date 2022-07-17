import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-log-out-btn',
  templateUrl: './log-out-btn.component.html',
  styleUrls: ['./log-out-btn.component.scss']
})
export class LogOutBtnComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
