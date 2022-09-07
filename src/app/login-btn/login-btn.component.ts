import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
