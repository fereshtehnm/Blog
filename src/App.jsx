import { useState, useEffect } from 'react'
import React from 'react'
import Header from './assets/Header/Header'
import Main from './assets/Main/Main'
import Footer from './assets/Footer/Footer'
//API
import axios from 'axios'
import './App.css'

// const DUMMY_EXPENSES = [
//   {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14)
//   },
//   {
//       id: 'e2',
//       title: 'New TV',
//       amount: 799.49,
//       date: new Date(2021, 2, 12)
//   },
//   {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28)
//   },
//   {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12)
//   },
//   {
//       id: 'e5',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12)
//   },
// ]

function App() {
  
  const [postFlag, setPostFlag] = useState(false);
  const [categoryFlag, setCatFlag] = useState(false);

  const [postsAPI, setPosts] = useState([])
  const [categoriesAPI, setCategories] = useState([])

  const getPosts = () => {
    axios.get('http://192.168.1.54:8000/api/get_post')
    .then((response) => {
      const myPosts = response.data
      setPosts(myPosts)
      setPostFlag(true)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  const getCategories = () => {
    axios.get('http://192.168.1.54:8000/api/get_category')
    .then((response) => {
      const myCats = response.data
      setCategories(myCats)
      setCatFlag(true)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  useEffect(() => {
    getPosts(),
    getCategories()
  }, [])

  return (
    <div>
    {postFlag & categoryFlag ? (
      <div className="App" >
        <Header title="My header" subtitle="subtitle2" />
        <Main message="My content" posts={postsAPI} cats={categoriesAPI} />  
        <Footer title="My header" subtitle="subtitle2" />
      </div>
    ) : (
      <h1>Loading...</h1>
    )}
  </div>
  )
}

export default App
