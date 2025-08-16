import './App.css'
import { useState, useEffect } from 'react'

const Card = ( { name, email, id } ) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setMonsters(users)
      })
  }, [])

  return (
    <>
      {monsters.map((monster, idx) => {
        return <Card key={`${monster.name}-${monster.id}`} name={monster.name} email={monster.email} id={monster.id} />
      })}
    </>
  )
}

export default App
