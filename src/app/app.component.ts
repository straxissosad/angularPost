import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray = [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript 2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'}
  ]


  title = 'angularLearn';

  addNewPost(event:any) {
    event.preventDefault()
    console.log(this.title)
  }

  setTitle(event: any) {
    this.title = event.target.value;
  }
}
