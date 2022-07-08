import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
list:any[]=[]
addItem(item:string){
  this.list.push({id:this.list.length,name:item})
}  
removeItem(id:number){
  this.list.splice(this.list.indexOf(id),1)
}

}
