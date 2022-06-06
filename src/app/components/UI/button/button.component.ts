import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'MyButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() description!:string;
  constructor() { }

  ngOnInit(): void {
  }
}
