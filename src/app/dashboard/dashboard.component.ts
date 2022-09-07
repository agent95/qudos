import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  roles: string[] = [];
  isModerator: boolean = false;
  username = "";


  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      const userDetails = this.tokenStorage.getUser();
      this.roles = userDetails.roles;
      this.username = userDetails.username;

      this.isModerator = this.roles.includes('ROLE_MODERATOR')
    }

  }

}
