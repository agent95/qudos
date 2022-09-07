import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qudosApp';
  isLoggedIn: boolean = false;
  userEmail = '';
  userName: any;

  constructor( private tokenStorage: TokenStorageService){}

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      const userDetails = this.tokenStorage.getUser();
      this.userName = userDetails.username;
      this.userEmail = userDetails.email;
    }
  }

}
