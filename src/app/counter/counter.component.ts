import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number = 0;
  inputValue: number;
  title:string = 'Angular Counter Example'
  constructor() { }

  ngOnInit() {
  }

  increament(userInput){
    if(userInput){
      this.count += userInput ;
      this.inputValue = null;
    }
    else{
      this.count++;
    }
    
  }
  decreament(userInput){
    if(userInput){
      this.count -= userInput;
      this.inputValue = null;
    }
    this.count--;
  }

}
