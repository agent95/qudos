import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddMembersComponent } from '../add-members/add-members.component';
import { AddValueComponent } from '../add-value/add-value.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team: any;
  @Input() isInvited: boolean = false;
  @Input() userId: string = '';
  constructor(private authService: AuthService, public matDialog: MatDialog) { }

  myTeamId = '';
  newValue = '';
  members: any[] = [];

  ngOnInit(): void {
    this.authService.getTeamMembers(this.team._id).subscribe(
      {
        next: (data) => {
          this.myTeamId = data.teamId;
          this.members = data.members;
        },
        error: (err) => {
          console.log(err.error.message);
        },
        complete: () => { }
      }
    );
  }

  openAddMember() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    // dialogConfig.height = "300px";
    dialogConfig.width = "600px";
    dialogConfig.data = { teamId: this.myTeamId }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AddMembersComponent, dialogConfig);
  }

  openAddValue() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "add-value-component";
    // dialogConfig.height = "300px";
    dialogConfig.width = "600px";
    dialogConfig.data = { teamId: this.myTeamId }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AddValueComponent, dialogConfig);
  }

  deleteValue(index: any) {
    this.authService.deleteValue(this.team._id, index).subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err)},
      complete: ()=>{}
    })
  }

  joinTeam() {
    this.authService.joinTeam(this.team._id, this.userId).subscribe(
      {
        next: (data) => {
          console.log('data', data);
          window.location.reload();
        },
        error: (err) => { console.log(err.message)},
        complete: () => { }
      }
    )
  }
  
  rejectInvite() {
    this.authService.rejectInvite(this.team._id, this.userId).subscribe(
      {
        next: (data) => {
          console.log('data', data);
          window.location.reload();
        },
        error: (err) => { console.log(err.message)},
        complete: () => { }
      }
    )
  }


}
