import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  form: any = {
    name: null
  };
  isCreateFailed = false;
  errorMessage = '';
  userId: any;

  constructor( private authService: AuthService, private tokenStorage: TokenStorageService,public dialogRef: MatDialogRef<CreateTeamComponent>) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.userId = this.tokenStorage.getUser().id;
    }
  }

  onSubmit(): void {
    const { teamName } = this.form;
    this.authService.createTeam(teamName.split(' ').join('').toLowerCase(), this.userId).subscribe(
      {
        next: (data) => {
          this.isCreateFailed = false;
          // this.addToUser(data.team._id)
          window.location.reload();
          // console.log(data)
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isCreateFailed = true;
        },
        complete: () => {}
      }
    );
  }

  closeModal(){
    this.dialogRef.close();
  }

}
