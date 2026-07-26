// post.ts

export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  category: "TIPS & TRICKS" | "NEWS" | "TRENDING" | "INSPIRATION" | "GUIDES" | "INTERVIEWS" | "FEATURES";
}

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Top 10 casual look ideas to dress up your kids',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-1.jpg',
    createdAt: new Date('2025-08-22'),
    updatedAt: new Date('2025-08-22'),
    category: 'TIPS & TRICKS',
  },
  {
    id: 2,
    title: 'Latest trends of wearing street wears supremely',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-2.jpg',
    createdAt: new Date('2025-08-25'),
    updatedAt: new Date('2025-08-25'),
    category: 'TRENDING',
  },
  {
    id: 3,
    title: '10 Different Types of comfortable clothes ideas for women',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-3.jpg',
    createdAt: new Date('2025-08-28'),
    updatedAt: new Date('2025-08-28'),
    category: 'INSPIRATION',
  },
  // ─── My 3 additions ──────────────────────────────────────────────
  {
    id: 4,
    title: 'Mastering the Art of Layering for Winter 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-2.jpg',
    createdAt: new Date('2024-09-01'),
    updatedAt: new Date('2024-09-01'),
    category: 'GUIDES',
  },
  {
    id: 5,
    title: 'Exclusive Interview with Top Fashion Designer Anna Wint',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-1.jpg',
    createdAt: new Date('2023-09-05'),
    updatedAt: new Date('2023-09-05'),
    category: 'INTERVIEWS',
  },
  {
    id: 6,
    title: 'Best Sustainable Fashion Brands to Watch in 2022',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...',
    thumbnail: 'images/post-thumb-3.jpg',
    createdAt: new Date('2021-09-10'),
    updatedAt: new Date('2021-09-10'),
    category: 'FEATURES',
  },
];