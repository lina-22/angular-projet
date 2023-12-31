import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogService } from './blog.service';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, BlogPostComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
