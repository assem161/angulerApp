import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AboutComponent } from './pages/about/about.component';
import { ContatComponent } from './pages/contat/contat.component';
// services file import
import { MoviesAuthService } from './services/movies-auth.service';
import { HttpClientModule } from '@angular/common/http';
// routes
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'movies', component: PostsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContatComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'movies/:id', component: SinglePostComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    SinglePostComponent,
    ShopComponent,
    SingleProductComponent,
    AboutComponent,
    ContatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )  
  ],
  providers: [MoviesAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
