import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-project';
  title1 = 'Blog Application Project1';
  // blogs = ['Blog post 1', 'Blog post 2', 'Blog post 3'];
  // imageSrc =
  //   'https://www.google.com/search?q=weather&tbm=isch&ved=2ahUKEwjDrsrN17aCAxWPVqQEHcSSA60Q2-cCegQIABAA&oq=weather&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgAEIoFEENQwxRY0iFgkiZoAHAAeACAATqIAZUDkgEBOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=H7FMZYOjLY-tkdUPxKWO6Ao&bih=953&biw=1920#imgrc=jX-F8g8hhlKA_M';
  // getTitle() {
  //   return this.title1;
  // }

  // number = 1;

  // onClick(e: any) {
  //   console.log('Button Clicked', e);
  //   e.stopPropagation();
  //   this.number++;
  // }

  // onDivClicked() {
  //   console.log('div Clicked');
  // }

  blogPosts;

  constructor(service: BlogService) {
    // let service = new BlogService();
    this.blogPosts = service.getBlogPost();
  }

  //http call
}
