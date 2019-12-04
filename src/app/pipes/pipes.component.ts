import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  INR = true

  private actualAmountInUSD = 50

  get amount() {
    return this.INR ? this.actualAmountInUSD*65 : this.actualAmountInUSD
  }

  get format() {
    return this.INR ? 'INR' : 'USD'
  }
  
  toggleINRandUSD(){
    this.INR = !this.INR
  }

  constructor() { }

  ngOnInit() {
  }

}
