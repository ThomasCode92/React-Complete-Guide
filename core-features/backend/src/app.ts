import express, { NextFunction, Request, Response } from 'express';

import { getStoredPosts, storePosts } from './data/posts';
import Post from './models/Post.model';

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get(
  '/api/posts',
  async (
    req: Request,
    res: Response<{ posts: Post[] }>,
    next: NextFunction
  ) => {
    const storedPosts = await getStoredPosts();
    await new Promise<void>((resolve, reject) =>
      setTimeout(() => resolve(), 1500)
    );
    res.json({ posts: storedPosts });
  }
);

app.get(
  '/api/posts/:id',
  async (
    req: Request<{ id: string }>,
    res: Response<{ post: Post }>,
    next: NextFunction
  ) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find(post => post.id === req.params.id);
    res.json({ post });
  }
);

app.post(
  '/api/posts',
  async (
    req: Request<{}, {}, { body: string; author: string }>,
    res: Response<{ message: string; post: Post }>,
    next: NextFunction
  ) => {
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = new Post(postData.body, postData.author);
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: 'Stored new post.', post: newPost });
  }
);

app.listen(8080);
