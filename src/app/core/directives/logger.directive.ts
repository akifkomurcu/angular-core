import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[logger]' })


export class LoggerDirective {
  constructor() { }


  @Input()
  logger: any;
  xTimes: number = 0;

  @HostListener('click')
  onClick() {
    console.log('direktif dinliyor:', this.logger, ++this.xTimes);
  }

  // @HostListener('dblclick')
  // onDblClick() {
  //   console.log('direktif dinliyor dbl:', this.logger);
  // }

  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   console.log('direktif dinliyor mouseenter:', this.logger);
  // }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   console.log('direktif dinliyor mouseleave:', this.logger);
  // }

  // @HostListener('focus')
  // onFocus() {
  //   console.log('direktif dinliyor focus:', this.logger);
  // }
}
