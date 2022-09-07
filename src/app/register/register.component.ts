import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe(
      {
        next: (data) => {
          this.isSignUpFailed = false;
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
