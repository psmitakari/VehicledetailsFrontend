import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checke',
  templateUrl: './checke.component.html',
  styleUrls: ['./checke.component.css']
})
export class CheckeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  checkEligibility(CheckeForm:any)
  {
      console.log(CheckeForm.value);
      
  }
}
