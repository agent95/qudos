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

  constructor( private tokenStorage: TokenStorageService){}

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

}
