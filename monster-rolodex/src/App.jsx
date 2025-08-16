import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
      })
  }, [])

  return (
    <>
      <CardList monsters={monsters} />
    </>
  )
}

export default App
