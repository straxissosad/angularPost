import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'MyInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
