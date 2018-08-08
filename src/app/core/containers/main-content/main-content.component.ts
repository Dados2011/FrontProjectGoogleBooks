import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../alerts/services/messages.service';
import { Message } from '../../../alerts/models/message';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private messageservice: MessagesService) { }

  ngOnInit() {
    window.addEventListener('online', this.updateIndicator.bind(this));
    window.addEventListener('offline', this.updateIndicator.bind(this));

  }
    updateIndicator(event) {
      const msg: Message = {msg: '', type: ''};
      if (event.type === 'online') {
        msg.msg = 'Se ha establecido conexión de red.';
        msg.type = 'success';
        this.messageservice.message(msg);
      } else if ( event.type === 'offline') {
          msg.msg = 'Se ha perdido la conexión de red.';
          msg.type = 'error';
          this.messageservice.message(msg);
      }
    }
}
