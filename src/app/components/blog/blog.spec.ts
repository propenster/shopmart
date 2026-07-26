import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog } from './blog';
import { Api } from '../../services/api';
import { DatePipe } from '@angular/common';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog, DatePipe],
      providers: [provideZonelessChangeDetection(), { provide: Api }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
