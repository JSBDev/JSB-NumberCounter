import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'JSB-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JSBNumberCounter';
  NumberData;
  ngOnInit() {
    this.calme()
    
  }
  
  calme(){
    
    setInterval( _ => {
      this.NumberData = Math.floor(Math.random() * 90000) + 10000;
      console.log(this.NumberData);
  
    }, 1000);
    
  }
}
