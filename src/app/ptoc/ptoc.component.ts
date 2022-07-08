import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ptoc',
  templateUrl: './ptoc.component.html',
  styleUrls: ['./ptoc.component.css']
})
export class PtocComponent implements OnInit {

  constructor() { }
  @Input() item=0;
  ngOnInit(): void {
  }

}
