import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, from, interval, of } from 'rxjs';
import { concatMap, distinctUntilChanged, zip, filter, map, mergeMap, scan, take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

enum ReportType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  datageldi: any
  bindData: any

  ReportType = ReportType
  ngOnInit() {
       //rxJS

       console.log('---------------------map---------------------------')

       //map: Observable'dan gelen her veriyi belirli bir dönüşüm işleminden geçirir ve dönüştürülmüş veriyi yeni bir Observable'a yayar.
       const source1 = of(1, 2, 3, 4, 5);
       const mapped = source1.pipe(map(value => value * 2));
       mapped.subscribe(value => console.log(value)); // 2, 4, 6, 8, 10

       console.log('---------------------filter---------------------------')
       //filter: Belirli bir koşulu karşılayan verileri filtreler ve sadece koşulu sağlayan verileri yeni Observable'a yayar.
       const source2 = of(1, 2, 3, 4, 5);
       const filtered = source2.pipe(filter(value => value % 2 === 0));
       filtered.subscribe(value => console.log(value)); // 2, 4

       console.log(('--------------------mergeMap--------------------------'))
       //mergeMap (flatMap): Her veri parçasını bir Observable'a dönüştürür ve bu Observable'ları birleştirir.
       const source3 = from(['apple', 'banana', 'cherry']);
       const merged = source3.pipe(mergeMap(fruit => from(fruit.split(''))));
       merged.subscribe(letter => console.log(letter)); // a, p, p, l, e, b, a, n, a, n, a, c, h, e, r, r, y

       //combineLatest: Birden fazla Observable'dan gelen en son değerleri birleştirir ve bu değerleri bir dizi olarak yeni Observable'a yayar.
       // const source11 = interval(1000);
       // const source22 = interval(500);
       // const combined = combineLatest(source11, source22);
       // combined.subscribe(values => console.log(values));  // [0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1], ...

       console.log(('-------------------concatMap---------------------------'))
       //concatMap: Her veriyi sırayla işler ve önceki işlem tamamlanmadan bir sonrakine geçmez.
       const source4 = from([1, 2, 3]);
       const concatenated = source4.pipe(concatMap(value => from([value, value * 2])));
       concatenated.subscribe(value => console.log(value)); // 1, 2, 2, 4, 3, 6

       console.log(('--------------------scan--------------------------'))
       //scan: Verileri birikimli bir şekilde işler, her adımda bir önceki sonucu kullanır.
       const source5 = of(1, 2, 3, 4, 5);
       const accumulated = source5.pipe(scan((acc, value) => acc + value, 0));
       accumulated.subscribe(value => console.log(value)); // 1, 3, 6, 10, 15




       // take: Belirli bir sayıda veriyi alır ve sonra Observable'ı otomatik olarak tamamlar.
       const source6 = interval(1000);
       const taken = source6.pipe(take(3));
       taken.subscribe(value => console.log(value)); // 0, 1, 2

       console.log('--------------distinctUntilChanged---------------------------')

       // distinctUntilChanged: Ardışık aynı değerleri filtreler.
       const source7 = of(1, 1, 2, 2, 3, 3, 4);
       const distinct = source7.pipe(distinctUntilChanged());
       distinct.subscribe(value => console.log(value)); // 1, 2, 3, 4

       console.log('-------------------zip--------------------------')

       const source111 = of('A', 'B', 'C');
       const source222 = of(1, 2, 3);
       const zipped = source111.pipe(zip(source222));
       zipped.subscribe(values => console.log(values)); // ['A', 1], ['B', 2], ['C', 3]

       console.log('--------------------take---------------------------')



       // this.authService.postDatas({
       //   title: 'foo',
       //   body: 'bar',
       //   userId: 1,
       // }).subscribe(res => {
       //   console.log('post', res);
       // })

  }



}
