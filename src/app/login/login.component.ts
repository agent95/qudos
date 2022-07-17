import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }

    if(this.isLoggedIn){
      this.router.navigate(['dashboard']);
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      {
        next: (data) => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data.user);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();  
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        },
        complete: () => {}
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}