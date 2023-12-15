import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SubPageComponent } from './sub-page/sub-page/sub-page.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('childComponentRef', { static: false })
  sub!: SubPageComponent;

  ngOnInit() {
    console.log('ngOnInit', this.sub);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.sub);
    if(this.sub) {
      this.sub.data = 'Veriyi Değiştirdim';
    }
  }

}
