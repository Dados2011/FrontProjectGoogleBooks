import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const textIndex = 'email: ';
    return textIndex + value;
  }

}
