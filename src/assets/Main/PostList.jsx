import React from "react"
import Post from "./Post"

const PostList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="">Found no Post!</h2>
  }else{
    // return <h2 className="">{props.items}</h2>
    // console.log(props.items)
    return (
      props.items.map((post) => (
          <Post  key={post.id} title={post.title} text={post.content} />
      ))
    )
  }

}
export default PostList
