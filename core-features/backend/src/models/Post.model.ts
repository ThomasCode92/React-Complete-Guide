class Post {
  id: string;

  constructor(
    public body: string,
    public author: string,
  ) {
    this.id = Math.random().toString();
  }
}

export default Post;
