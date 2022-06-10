import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  constructor() { }

  switch: boolean = false;
  thereIsText: string = '';

  ngOnInit(): void {
  }

  changeSwitch() {
    if(this.switch) {
      this.switch = false
    } else this.switch = true
  }
}
