import fs from 'node:fs/promises';
import path from 'path';

import Post from '../models/Post.model';

const pathname = path.join(__dirname, '..', 'posts.json');

export async function getStoredPosts() {
  const rawFileContent = await fs.readFile(pathname, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts as Post[];
}

export function storePosts(posts: Post[]) {
  return fs.writeFile(pathname, JSON.stringify({ posts: posts || [] }));
}
