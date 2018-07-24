import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipePipe } from './pipe/email-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailPipePipe],
  exports: [EmailPipePipe]
})
export class AppPipesModule { }
