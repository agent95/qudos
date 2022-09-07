import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../_services/auth.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.scss']
})
export class AddValueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddValueComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService, ) { }

  newValue: any;
  myTeamId: any;
  isInviteFailed = false;
  errorMessage = '';

  form: any = {
    value: null
  };

  ngOnInit(): void {
    this.myTeamId = this.data.teamId;
  }

  onSubmit(): void {
    const { value } = this.form;
    this.authService.addValue(this.myTeamId, value).subscribe(
      {
        next: (data) => {
          this.isInviteFailed = false;
          window.location.reload();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isInviteFailed = true;
        },
        complete: () => {}
      }
    );
  }

  closeModal(){
    this.dialogRef.close();
  }
}
