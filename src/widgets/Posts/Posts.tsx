import { type PostWithLinks, getPostsWithLinks } from "@/entities/posts"
import Post from "./component/Post"

export const revalidate = 30

export default async function PostList() {
  const posts = await getPostsWithLinks()

  return (
    <div id="posts">
      <h2 className="text-3xl pb-4">Posts</h2>
      <div className="flex flex-col gap-5">
        {posts.map((post: PostWithLinks) => (
          <Post
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  )
}
