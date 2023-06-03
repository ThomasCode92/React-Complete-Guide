class Post {
  id: number;

  constructor(public body: string, public author: string) {
    this.id = Math.random();
  }
}

export default Post;
