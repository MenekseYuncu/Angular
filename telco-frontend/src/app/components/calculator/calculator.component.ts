import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {
    //console.log("Constructor oldugu icin ngOnInit'ten once calisir");
  }

  //comp initialie edildiginde calisan fonk'tur.
  ngOnInit(): void {
    //console.log('ngOnInit works!');
  }
}
