import React from "react"
import Post from "./Post"

// display a list of posts
const PostList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="">Found no Post!</h2>
  } else {
    return (
      props.items.map((post) => (
        <Post key={post.id} title={post.title} text={post.text} />
      ))
    )
  }

}
export default PostList
