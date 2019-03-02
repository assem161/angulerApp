import { Component, OnInit } from '@angular/core';
import { MoviesAuthService } from '../services/movies-auth.service';
import { post } from '../models/post';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:post[];

  constructor(private router: Router ,private moviesAuth:MoviesAuthService) { }

  ngOnInit() {
    this.moviesAuth.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    })    
  }

  singlePost(id:number){
    this.router.navigate(['movies/',id]);
  }


  removePost(post:post){
    if(confirm('Are you sure')){
      this.moviesAuth.RemovePost(post.id).subscribe(()=> {
        this.posts.forEach((curr , index) => {
          if(post.id === curr.id){
            this.posts.splice(index,1);
          }
        })        
      })
    }
  }  
  
}
