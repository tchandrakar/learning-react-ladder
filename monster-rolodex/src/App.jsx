import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
        setFilteredMonsters(users)
      })
  }, [])

  return (
    <>
      <input type="search" placeholder="search monsters" onChange={(event) => {
        const searchField = event.target.value.toLowerCase();
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));
        setFilteredMonsters(filteredMonsters);
      }} />
      <CardList monsters={filteredMonsters} />
    </>
  )
}

export default App
