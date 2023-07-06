import React, { useState } from "react"
import PostsFilter from "./PostsFilter"
import Post from "./Post"
import Card from "./UI/Card"


const Posts = (props) => {
    // const { items } = props
    // // Access the data from the 'items' prop
    // const posts = items.posts
    // // const categories = items.categories
    // console.log(posts)

    const [filteredCategory, setFilteredCategory] = useState('Classic');

    const filterChangeHandler = selectedCategory => {
        setFilteredCategory(selectedCategory);
    };
  
    // const filteredPosts = props.items.filter(expense => {
    //   return expense.date.getFullYear().toString() === filteredCategory
    // })
    return (
        // props.items.posts.map((postList) => (
        //     <Post  key={postList.id} title={postList.title} text={postList.body}  />
        // )) 
        <PostsFilter
          selected={filteredCategory}
          onChangeFilter={filterChangeHandler}
          options={props.items.categories}
        />
        /* <ExpensesList items={filteredExpenses} /> */
    )
}

export default Posts