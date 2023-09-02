import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit{

  sessionList: any;
  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.getAllSessions();
  }

  getAllSessions(){
    this.sessionService.readAllSessions()
      .subscribe({
        next: data => {
          this.sessionList = data;
        },
        error: (erreur) =>
        {
          console.error(erreur);
        }
      })
  }
}
