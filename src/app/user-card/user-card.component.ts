import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  providers: [LogService]
})
export class UserCardComponent implements OnInit {

  constructor(private userService: UserService,
    @Self() private logService: LogService,
    @SkipSelf() private rootLogger: LogService) {
    logService.prefix = "UserCardComponent";
    if (this.logService) {
      this.logService.log("constructor init")
    }
    // if (this.rootLogger) {
    //   this.rootLogger.log("Root log object")
    // }
  }

  ngOnInit(): void {
  }

}
