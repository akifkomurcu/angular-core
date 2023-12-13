import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() data: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    //sadece Input varsa ve değişikliğe uğrarsa triggerlanır.
    console.log('1. ngOnChanges', changes);
  }

  ngOnInit() {
    //component oluşturulduğunda triggerlanır.
    console.log('2. ngOnInit');
  }

  ngDoCheck(): void {
    //componentin değişikliklerini kontrol eder. buna ts'deki değişiklikler de dahildir
   console.log('3. ngDoCheck');
  }

  ngAfterContentInit(): void {
    //componentin selector'ünün arasında yazdığın ne varsa burdaki <ng-content></ng-content> taglarının arasına düşer.
    console.log('4. ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // <ng-content></ng-content> taglarının arasına düşen datalar değiştikçe triggerlanır.
    console.log('5. ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    //template (html) oluşunca çalışacak.
    console.log('6. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    //template (html)de değişiklikler olduğunda triggerlanır.
    console.log('7. ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    //component ded olduğunda trigggerlanır.
   console.log('8. ngOnDestroy');
  }

  changeData(data: string) {
    console.log('data', data);
    this.data = data;
  }
}
