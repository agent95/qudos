import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.scss']
})
export class AcceptInviteComponent implements OnInit {
  invalidToken: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next:(data) => {
          const token = data['token'];
          console.log('token', token)
          token && this.validateInviteToken(token);
        },
        error:(err)=>{
          console.log(err)
        },
        complete:() => { }
      }
    )
  }


  validateInviteToken(token: string){
    this.authService.validateInviteToken(token).subscribe(
      {
        next: (res) => {
          this.router.navigate(['/reset-password', res.email])
        } ,
        error: (err) => {
          this.invalidToken = true;
          console.log('err', err)
        },
        complete: () => {}
      }
    ) 
  }

}
