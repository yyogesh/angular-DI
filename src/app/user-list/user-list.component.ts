import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../user.service';
import { LogService } from '../log.service';
import { SqlLogService } from '../sql-log.service';
import { LagacyLogger } from '../logger.lagacy';
import { AppConfig, APP_CONFIG } from '../config.token';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService, {
    provide: LogService, useFactory: (config: AppConfig) => {
      return config.sqlLogEnabled ? new SqlLogService(config) : new LogService()
    },
    deps: [APP_CONFIG]
  }]
})
export class UserListComponent implements OnInit {

  constructor(private logService: LogService, private sqlLogService: SqlLogService) { }

  ngOnInit(): void {
    this.logService.log("User List log");
    console.log("instance equal", this.logService === this.sqlLogService);
  }

}
