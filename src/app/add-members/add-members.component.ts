import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {

 
  form: any = {
    email: null
  };
  isInviteFailed = false;
  errorMessage = '';
  inviteToken = '';
  inviteUrl = '';
  myTeamId: any;
  successMessage: boolean = false;

  constructor(
    private authService: AuthService, 
    private clipboard:Clipboard, 
    public dialogRef: MatDialogRef<AddMembersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.myTeamId = this.data.teamId;
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.invite(email, this.myTeamId).subscribe(
      {
        next: (data) => {
          this.isInviteFailed = false;
          this.inviteToken = data.token;
          this.inviteUrl = `${environment.INVITE_URL}/accept-invite/${this.inviteToken}`;
          if (!data.token){
          //   this.dialogRef.close();
          this.successMessage = true;
          }
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

  closeModal(){
    this.dialogRef.close()
  }

}
