import { Component, OnInit } from '@angular/core';
import { MoviesAuthService } from '../services/movies-auth.service';
import { ActivatedRoute } from '@angular/router';
import { post } from '../models/post';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post:post;
  videoUrl;
  dangerousVideoUrl;

  constructor(private sanitizer: DomSanitizer ,private route: ActivatedRoute,private moviesAuth:MoviesAuthService) { }

  ngOnInit() {
    const id =+this.route.snapshot.paramMap.get('id');
    this.moviesAuth.getThePost(id).subscribe( post=>this.post = post);
    return this.post;
    console.log(this.post);
  }

  updateVideoUrl(acf) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = acf.server_1;
    return this.sanitizer.bypassSecurityTrustHtml(this.dangerousVideoUrl);
  }
}
