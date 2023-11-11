import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alert'
})

export class AlertPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
   alert(value);

  }
}
