import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  form: any = {
    email: null
  };
  isInviteFailed = false;
  errorMessage = '';
  inviteToken = '';
  inviteUrl = '';

  constructor(private authService: AuthService, private clipboard:Clipboard) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.invite(email).subscribe(
      {
        next: (data) => {
          this.isInviteFailed = false;
          this.inviteToken = data.token;
          this.inviteUrl = `http:qudos.app/accept-invite/${this.inviteToken}`
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isInviteFailed = true;
        },
        complete: () => {}
      }
    );
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  } 

}
