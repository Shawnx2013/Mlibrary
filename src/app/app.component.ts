import { Component, OnInit } from '@angular/core';
import { StatusService } from './service/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mlibrary';
  serverStatus = 'DOWN';

  constructor(
    private statusService: StatusService
  ){ }

  ngOnInit() {
    this.statusService.getStatus()
    .then((res) => {
      this.serverStatus = res.status;
      console.log('Backend Server status is currently ' + this.serverStatus);
    });
  }
}
