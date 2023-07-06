import { useState, useEffect } from 'react'
import Header from './assets/Header/Header'
import Main from './assets/Main/Main'
import Footer from './assets/Footer/Footer'
//API
import Axios from 'axios'
import './App.css'


const DUMMY_EXPENSES = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
  },
  {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
  },
  {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
  },
  {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
  },
  {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
  },
]

function App() {

  const [postsAPI, setData1] = useState(null)
  const [categoriesAPI, setData2] = useState(null)

  useEffect(() => {
    // Fetching API for posts
    Axios.get('https://jsonplaceholder.typicode.com/posts') //    Axios.get('http://192.168.1.54:8000/api/get_post')
      .then(response1 => {
        setData1(response1.data)
      })
      .catch(error => {
        console.log("Error while fetching API 1:", error)
      })

    // Fetching API for categories
    Axios.get('http://192.168.1.54:8000/api/get_category')
      .then(response2 => {
        setData2(response2.data)
      })
      .catch(error => {
        console.log("Error while fetching API 2:", error)
      })
  }, [])

    // Combine all the fetched data into a single object
    const items = {
      posts: DUMMY_EXPENSES,
      categories: categoriesAPI
      // Add more properties for other API data if needed
    };


  return (
    <div className="App" >
      <Header title="My header" subtitle="subtitle2" />
      <Main message="My content" items={items} />  
      <Footer title="My header" subtitle="subtitle2" />
    </div>
  )
}

export default App
