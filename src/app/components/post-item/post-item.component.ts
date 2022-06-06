import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post!: {id:number, title: string, body: string};
  @Input() key!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
