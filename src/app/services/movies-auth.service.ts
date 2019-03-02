import { Injectable } from '@angular/core';
import { post } from '../models/post';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MoviesAuthService {
//?per_page=100
postsUrl:string = 'http://localhost/wordpress1/wp-json/wp/v2/posts?_embed=true';
postsUrl2:string = 'http://localhost/wordpress1/wp-json/wp/v2/posts';

  constructor(private http:HttpClient) { }

       // method to get posts 
      getPosts() : Observable<post[]> {
        return this.http.get<post[]>(this.postsUrl);
      }

      // get post by id
      getThePost(id:number) :Observable<post>{
        const Url = `${this.postsUrl2}/${id}`;
        return this.http.get<post>(Url);
      }
      
      
      RemovePost(post:post | number) :Observable<post>{
        const id = typeof post === 'number' ? post :post.id;
        const Url = ` ${this.postsUrl2}/${id} `;
        return this.http.delete<post>(Url,httpOptions)
      }      

}
