import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog } from './blog';
import { Api } from '../../services/api';
import { DatePipe } from '@angular/common';
import { provideZonelessChangeDetection } from '@angular/core';
import { of } from 'rxjs';
import { Post } from '../../models/post';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;
  let apiService: Api;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog, DatePipe],
      providers: [provideZonelessChangeDetection(), { provide: Api }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    apiService = TestBed.inject(Api);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch posts on initialization', () => {
    spyOn(component, 'fetchPosts');
    component.ngOnInit();
    expect(component.fetchPosts).toHaveBeenCalled();
  });

  it('should fetch posts and update the posts array', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', content: 'Content 1', thumbnail: 'thumb1.jpg', createdAt: new Date(), updatedAt: new Date(), category: 'TIPS & TRICKS' },
      { id: 2, title: 'Post 2', content: 'Content 2', thumbnail: 'thumb2.jpg', createdAt: new Date(), updatedAt: new Date(), category: 'NEWS' }
    ];
    component.fetchPosts();
    expect(component.posts.length).toBe(6);
  });

  it('should render correct blog posts', () => {
    const fixture = TestBed.createComponent(Blog);
    const mockPosts: Post[] = [
      { id: 1, title: 'Post 1', content: 'Content 1', thumbnail: 'thumb1.jpg', createdAt: new Date(), updatedAt: new Date(), category: 'TIPS & TRICKS' },
      { id: 2, title: 'Post 2', content: 'Content 2', thumbnail: 'thumb2.jpg', createdAt: new Date(), updatedAt: new Date(), category: 'NEWS' }
    ];
    spyOn(apiService, 'getPosts').and.returnValue(of(mockPosts));
    fixture.detectChanges();
    expect(apiService.getPosts).toHaveBeenCalled();
    expect(component.posts.length).toBe(mockPosts.length);
    expect(component.posts[0].title).toBe('Post 1');
    expect(component.posts[1].title).toBe('Post 2');
  });




});
