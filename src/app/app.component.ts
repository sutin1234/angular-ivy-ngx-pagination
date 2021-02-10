import { Component } from '@angular/core';
import { BlogService } from './services/blog.service';
import { IBlog } from './interfaces/blog';
import { Observable } from 'rxjs';
import { Collection } from 'ngx-pagination/dist/paginate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-pagination-demo';

  p: number = 1;
  collection$: Observable<IBlog[]> | Observable<any>;

  constructor(private blog: BlogService) {
    this.collection$ = this.blog.getBlogs();
  }

}
