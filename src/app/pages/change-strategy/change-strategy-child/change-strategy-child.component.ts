import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-strategy-child',
  templateUrl: './change-strategy-child.component.html',
  styleUrls: ['./change-strategy-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeStrategyChildComponent implements OnInit {


// Component’imiz OnPush ile konfigüre edildiğinde aşağıdaki durumlarda yeniden render edilir.

// 1- Gönderdiğimiz @Input parametrelerinin referansını değiştirdiğimizde render işlemi gerçekleşir. Eğer referans değişmez ise, sayfa yeniden render edilmez.

// 2- Observable’lara yeni bir değer emit edilmesi ve bu observable’ların async pipe olarak kullanması durumunda.

// 3- Kendisi veya child component’lardan event call edilmesi.

// 4- ChangeDetectorRef ile manuel olarak tetiklenmesi.

  @Input() product: { id: number; name: string } | undefined;

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
