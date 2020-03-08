import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@Angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router'
import { AlertifyService } from '../services/alertify.service'
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postservice: PostService
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[];
  users: User[];
  filterText: string;

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"])
    });

  }
  getPosts(userid) {
    this.postservice.getPosts(userid).subscribe(data => {
      this.posts = data;
    })



    // if (userid) {
    //   let newPath = this.path + "posts?userId=" + userid
    //   // debugger;
    //   this.http.get<Post[]>(newPath).subscribe(response => {
    //     this.posts = response;
    //   })
    // }
    // else {
    //   this.http.get<Post[]>(this.path + "posts").subscribe(response => {
    //     this.posts = response;
    //   })
    // }
  }


  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }

  addToFavorites(post) {
    this.alertifyService.success("Added to favs :" + post.title)
  }

}
