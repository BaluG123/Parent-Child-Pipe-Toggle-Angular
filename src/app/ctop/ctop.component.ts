import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ctop',
  templateUrl: './ctop.component.html',
  styleUrls: ['./ctop.component.css']
})
export class CtopComponent implements OnInit {

  constructor() { }
  @Output() updateEvent=new EventEmitter<string>();
  ngOnInit(): void {
  }

}
