import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  message: Message;
  classType: string;
  constructor( private messageService: MessagesService) { }

  ngOnInit() {
    this.messageService.getMessage().
    subscribe(
      (msg: Message) => {
        this.message = msg;
        switch(this.message.type) {
          case 'sucess': this.classType = 'alert-success';
          break;
          case 'error': this.classType = 'alert-danger';
          break;
          default:
          break;
        }
      });
  }

}
