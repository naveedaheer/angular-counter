import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number = 0;
  title:string = 'Angular Counter Example'
  constructor() { }

  ngOnInit() {
  }

  increament(){
    this.count++;
  }
  decreament(){
    this.count--;
  }

}
