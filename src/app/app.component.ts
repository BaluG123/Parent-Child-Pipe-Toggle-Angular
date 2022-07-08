import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week3';
  Number=10;
  updateNumber(){
    this.Number=Math.floor(Math.random()*20)
  }
  data='';
  updateData(item:string){
    console.warn(item)
    this.data=item
  }

  Name:any;

  user={
    name:'balu',
    age:22
  }

  today=Date()
}
