import {Component, OnInit} from '@angular/core';
import {Post} from "./model/post-model";
import {PostServiceService} from "./service/post-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postArray: Post[] = [];
  postObj: Post = new Post();
  addPostTitle: string = '';
  addPostBody: string = '';
  title = 'angularLearn';
  searchQuery: string = '';

  constructor(private postService: PostServiceService) { }

  ngOnInit():void {
    this.getAllPost();
  }

  addNewPost() {
    this.postObj.title = this.addPostTitle;
    this.postObj.body = this.addPostBody;
    this.postObj.id = Date.now();
    this.postArray.push(this.postObj);
    this.addPostBody = '';
    this.addPostTitle = '';
  }

  getAllPost() {
    this.postService.getAllPosts().subscribe(post => {
      this.postArray = post;
    })
  }

  selectedSort(event: any) {
    const sort: 'body' | 'title' = event.target.value;
    this.postArray.sort((a,b) => a[sort].localeCompare(b[sort]))
  }
}
