import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertMessageComponent],
  exports: [AlertMessageComponent]
})
export class AlertsModule { }
