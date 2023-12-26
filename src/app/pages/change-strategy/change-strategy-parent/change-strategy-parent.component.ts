import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-strategy-parent',
  templateUrl: './change-strategy-parent.component.html',
  styleUrls: ['./change-strategy-parent.component.css']
})
export class ChangeStrategyParentComponent implements OnInit {

//   Change Detection mekanizması aşağıdaki durumlarda çalışır;

// 1- Component içerisinde bir event çağırıldığında(click, change gibi)

// 2- Component’lar da yer alan state’lerin güncellenmesinde.

// 3- @Input ile taşınan değerlerin güncellenmesi durumunda

  constructor() { }

  counter = 0;
  productList: { id: number; name: string }[] = [
    { id: 1, name: 'First Product' },
    { id: 2, name: 'Second Product' },
    { id: 3, name: 'Third Product' },
  ];
  updateCounter(): void {
    //eğer alt component'te onPush tanımlamasaydık,
    //Angular herhangi bir değişiklik olma durumunu göz önünde bulundurarak alt componenti yeniden render edecekti.
    this.counter = this.counter + 1;
  }

  updateProduct(): void {
    //Component render edilmez.
    this.productList[0].name = 'Update Product';
    //Component tekrar render edilir
    this.productList[0] = { ...this.productList[0], name: 'Update Product' };

    // Eğer objemizi güncellersek yani mutate edersek child component’imiz değişikliği anlamayacaktır.
    // OnPush kullandığımızda Input’larımız yalnızca referansı değiştiğinde,
    // değişimden haberdar olacak ve sayfayı yeniden render edecektir
  }

  ngOnInit() {
  }

}
