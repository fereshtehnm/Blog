import { useState, useEffect } from 'react'
import React from 'react'
import Header from './assets/Header/Header'
import Main from './assets/Main/Main'
import Footer from './assets/Footer/Footer'
//API
import axios from 'axios'
import './App.css'
import * as data from "./tt.json"
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

  const posts = data.posts
  const cats = data.cats
  console.log(posts);

  return (
    <div>
      {posts ? (
        <div className="App" >
          <Header title="My header" subtitle="subtitle2" />
          <Main message="My content" posts={posts} cats={cats} />
          <Footer title="My header" subtitle="subtitle2" />
        </div>
      ) : (
        <div className='flex justify-center items-center py-36'>
          <span className="loading loading-ball loading-md"></span>
          <h1 className=''>Loading...</h1>
        </div>
      )}
    </div>
  )
}

export default App
