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

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;

      this.isModerator = this.roles.includes('ROLE_MODERATOR')
    }

  }

}
