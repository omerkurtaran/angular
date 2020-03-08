import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/"

  getPosts(userid:number): Observable<Post[]> {
    if (userid) {
      let newPath = this.path + "posts?userId=" + userid
      // debugger;
      return this.http.get<Post[]>(newPath)
    }
    else {
      return this.http.get<Post[]>(this.path + "posts")
    }
  }
}
