import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  data = [
    {
      lang: 'JavaScript',
      usedOn: 'web'
    },
    {
      lang: 'Swift',
      usedOn: 'iOS'
    }
  ];

  someRandomvariable = true;

  constructor(private el: ElementRef) {

    el.nativeElement.style.textColor = "white"
    el.nativeElement.style.backgroundColor = "black"

    setInterval(() => {
      this.someRandomvariable = !this.someRandomvariable;
    }, 1000);

  }
  ngOnInit() {
  }

}
