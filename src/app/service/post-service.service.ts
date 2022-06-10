import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  serviceUrl: string = ''

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://jsonplaceholder.typicode.com/posts'
  }


  getAllPosts(): Observable<[]>{
    return this.http.get<[]>(this.serviceUrl)
  }
}
