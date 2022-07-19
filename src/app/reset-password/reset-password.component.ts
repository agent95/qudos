import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
   }

   form: any = {
    username: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  @Input() userEmail = '';

   ngOnInit(): void {
    // this.route.params.subscribe(
    //   {
    //     next:(data) => {
    //       this.userEmail = data['email'];
    //     },
    //     error:(err)=>{
    //       console.log(err)
    //     },
    //     complete:() => { }
    //   }
    // )
    
   }

   onSubmit(): void {
    const { username, password } = this.form;
    this.authService.updateDetails(username, this.userEmail, password).subscribe(
      {
        next: (data) => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.authService.logout();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      }
    );
  }

}
