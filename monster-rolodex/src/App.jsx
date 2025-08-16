import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));
    setFilteredMonsters(filteredMonsters);
  }

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    </>
  )
}

export default App
