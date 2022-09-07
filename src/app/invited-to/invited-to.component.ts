import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-invited-to',
  templateUrl: './invited-to.component.html',
  styleUrls: ['./invited-to.component.scss']
})
export class InvitedToComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  invitedTo = [];

  ngOnInit(): void {
  }

}
