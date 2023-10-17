import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[logger]' })


export class LoggerDirective {
  constructor() { }


  @Input()
  logger: any;

  @HostListener('click')
  onClick() {
    console.log('direktif dinliyor:', this.logger);
  }
}
