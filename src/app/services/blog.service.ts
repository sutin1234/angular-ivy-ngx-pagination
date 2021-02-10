import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog$: Observable<IBlog[]>;

  constructor(private fb: AngularFirestore) {
    this.blog$ = this.fb.collection('blogs').valueChanges() as Observable<IBlog[]>;
  }
  getBlogs(): Observable<IBlog[]> {
    return this.blog$
  }
}
