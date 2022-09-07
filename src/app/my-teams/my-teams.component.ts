import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTeamComponent } from '../create-team/create-team.component';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent implements OnInit {

  myTeams: any= [];
  invitedTo: any = [];
  userId: string = "";
  teamsTabIndex = 0;
  invitedTabIndex = 0;
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,public matDialog: MatDialog) {

   }

  ngOnInit(): void {
    this.userId = this.tokenStorage.getUser().id;
    this.authService.myTeams(this.userId).subscribe(
      {
        next: async (data) => {
          this.myTeams = await this.isOwner(data.myTeams);
          this.invitedTo = await data.myTeams.invitedTo;
        },
        error: (err) => {
          console.log(err.message);
        },
        complete: () => {}
      }
    );
  }

  isOwner(teamData: any){
    const ownsData = teamData.owns;
    const memberData = teamData.isMemberOf;
    const teams = memberData.map((team:any) => {
       team.isOwner = ownsData.some((e:any) => e._id === team._id);
       return team;
    });
    return teams;
  }

  openCreateTeam() {
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      // dialogConfig.height = "300px";
      dialogConfig.width = "600px";
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(CreateTeamComponent, dialogConfig);
    }
}

