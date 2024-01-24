import React, { useState } from "react"
import PostsFilter from "./PostsFilter"
import PostList from "./PostList"

const Posts = (props) => {
    // const [filteredCategory, setFilteredCategory] = useState('All');

    // const filterChangeHandler = selectedCategory => {
    //   setFilteredCategory(selectedCategory)
    // }

    // function filteredPosts(selector) {
    //   const filteredArray = []; // Initialize an empty array

    //   for (let i = 0; i < props.posts.length; i++) {
    //     const post = props.posts[i];
    //     for (let j = 0; j < post.category.length; j++) {
    //       const category = post.category[j];
    //       if (category.id == selector) {
    //         filteredArray.push(post); // Push the matching post to the array
    //       }
    //     }
    //   }
    //   return filteredArray
    // }


    return (
      <>
        {/* <PostsFilter
          selected={filteredCategory}
          onChangeFilter={filterChangeHandler}
          categories={props.cats}
        /> */}
        {/* {console.log(filteredPosts(filteredCategory))} */}
        <PostList items={props.posts} />
        </>
    )
}

export default Posts